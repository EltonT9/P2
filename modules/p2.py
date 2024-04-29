import boto3
import json
import uuid

# Clients
s3 = boto3.client('s3')
sns = boto3.client('sns')
sqs = boto3.client('sqs')
sts = boto3.client('sts')

# S3 bucket
bucket_name = 'ethomas-p2'

# Check if bucket exists and create if not
try:
    s3.head_bucket(Bucket=bucket_name)
except s3.exceptions.ClientError:
    # The bucket does not exist or you have no access.
    s3.create_bucket(Bucket=bucket_name)

# Enable bucket versioning
s3.put_bucket_versioning(
    Bucket=bucket_name,
    VersioningConfiguration={'Status': 'Enabled'}
)

# Enable static website hosting
s3_website_configuration = {'IndexDocument': {'Suffix': 'index.html'}}
s3.put_bucket_website(Bucket=bucket_name, WebsiteConfiguration=s3_website_configuration)

# UUID for SNS topic
sns_topic_name = f"snstopic-{uuid.uuid4()}"

# SNS topic
response = sns.create_topic(Name=sns_topic_name)
sns_topic_arn = response['TopicArn']

# SNS Notification for S3 bucket
s3.put_bucket_notification_configuration(
    Bucket=bucket_name,
    NotificationConfiguration={
        'TopicConfigurations': [
            {
                'TopicArn': sns_topic_arn,
                'Events': ['s3:ObjectCreated:*'],
                'Filter': {
                    'Key': {
                        'FilterRules': [
                            {'Name': 'prefix', 'Value': 'CloudFormation/'},
                            {'Name': 'suffix', 'Value': '.yaml'}
                        ]
                    }
                }
            }
        ]
    },
    SkipDestinationValidation=True
)

# Get caller's AWS account ID
caller_identity = sts.get_caller_identity()
account_id = caller_identity['Account']

# Bucket Policy
bucket_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1785169158894",
            "Effect": "Allow",
            "Principal": {"AWS": f"arn:aws:iam::{account_id}:root"},
            "Action": "s3:*",
            "Resource": [f"arn:aws:s3:::{bucket_name}", f"arn:aws:s3:::{bucket_name}/*"]
        }
    ]
}
s3.put_bucket_policy(Bucket=bucket_name, Policy=json.dumps(bucket_policy))

# SNS Policy
sns_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1785169158894",
            "Effect": "Allow",
            "Principal": {"Service": "s3.amazonaws.com"},
            "Action": "SNS:Publish",
            "Resource": sns_topic_arn,
            "Condition": {
                "StringEquals": {"aws:SourceAccount": account_id},
                "ArnLike": {"aws:SourceArn": f"arn:aws:s3:::{bucket_name}"}
            }
        }
    ]
}
sns.set_topic_attributes(TopicArn=sns_topic_arn, AttributeName='Policy', AttributeValue=json.dumps(sns_policy))

# SQS queues
queue_names = [f'ethomasq1-{uuid.uuid4()}', f'ethomasq2-{uuid.uuid4()}', f'ethomasq3-{uuid.uuid4()}']

for queue_name in queue_names:
    sqs.create_queue(QueueName=queue_name)

# Subscribe the SNS topic to an SQS queue
queue_response = sqs.create_queue(QueueName='MyQueue')
sqs_queue_url = queue_response['QueueUrl']

response = sqs.get_queue_attributes(
    QueueUrl=sqs_queue_url,
    AttributeNames=['QueueArn']
)
sqs_queue_arn = response['Attributes']['QueueArn']

sns.subscribe(
    TopicArn=sns_topic_arn,
    Protocol='sqs',
    Endpoint=sqs_queue_arn
)

# SQS Policy
for queue_name in queue_names:
    queue_url_response = sqs.get_queue_url(QueueName=queue_name)
    queue_url = queue_url_response['QueueUrl']
    response = sqs.get_queue_attributes(
        QueueUrl=queue_url,
        AttributeNames=['QueueArn']
    )
    queue_arn = response['Attributes']['QueueArn']
    
    sqs.set_queue_attributes(
        QueueUrl=queue_url,
        Attributes={
            'Policy': json.dumps({
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "SQSID",
                        "Effect": "Allow",
                        "Principal": {"Service": "s3.amazonaws.com"},
                        "Action": "SQS:SendMessage",
                        "Resource": queue_arn,
                        "Condition": {
                            "StringEquals": {"aws:SourceAccount": account_id},
                            "ArnLike": {"aws:SourceArn": sns_topic_arn}
                        }
                    },
                    {
                        "Sid": "Stmt1785169158894",
                        "Effect": "Allow",
                        "Principal": {"Service": "sns.amazonaws.com"},
                        "Action": ["SQS:ReceiveMessage", "SQS:SendMessage"],
                        "Resource": queue_arn,
                        "Condition": {"ArnEquals": {"aws:SourceArn": sns_topic_arn}}
                    }
                ]
            })
        }
    )
