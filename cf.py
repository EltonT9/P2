import boto3

def create_cloudfront_distribution(bucket_name):
    cloudfront_client = boto3.client('cloudfront')

    # Origin Access Identity
    oai_response = cloudfront_client.create_cloud_front_origin_access_identity(
        CloudFrontOriginAccessIdentityConfig={
            'CallerReference': 'ethomas-p2-OAI',
            'Comment': 'OAI for ethomas-p2 project'
        }
    )
    origin_access_identity_id = oai_response['CloudFrontOriginAccessIdentity']['Id']
    origin_access_identity_path = f'origin-access-identity/cloudfront/{origin_access_identity_id}'

    # Distribution configuration 
    distribution_config = {
        'CallerReference': 'ethomas-p2',
        'Comment': 'CloudFront Distribution for ethomas-p2 project',
        'Enabled': True,
        'Origins': {
            'Quantity': 1,
            'Items': [{
                'Id': 'ethomas-p2-S3Origin',
                'DomainName': f'{bucket_name}.s3.amazonaws.com',  # Adjust for correct S3 bucket domain
                'S3OriginConfig': {
                    'OriginAccessIdentity': origin_access_identity_path
                }
            }]
        },
        'DefaultCacheBehavior': {
            'TargetOriginId': 'ethomas-p2-S3Origin',
            'ViewerProtocolPolicy': 'https-only',
            'AllowedMethods': {
                'Quantity': 3,
                'Items': ['GET', 'HEAD', 'OPTIONS'],
                'CachedMethods': {
                    'Quantity': 2,
                    'Items': ['GET', 'HEAD']
                }
            },
            'Compress': True,
            'ForwardedValues': {'QueryString': False, 'Cookies': {'Forward': 'none'}},
            'MinTTL': 0,
            'DefaultTTL': 86400,
            'MaxTTL': 31536000,
        },
        'ViewerCertificate': {
            'ACMCertificateArn': 'arn:aws:acm:us-east-1:785169158894:certificate/ddf9372e-77f0-4d27-96a7-b57c44b0f20a',
            'SSLSupportMethod': 'sni-only',
            'MinimumProtocolVersion': 'TLSv1.2_2021'
        }
    }

    try:
        response = cloudfront_client.create_distribution(DistributionConfig=distribution_config)
        return response['Distribution']
    except boto3.exceptions.Boto3Error as e:
        return {'Error': str(e)}

# Assuming your bucket name is 'ethomas-p2'
distribution = create_cloudfront_distribution('ethomas-p2')
