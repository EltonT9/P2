// export const Footer = () => {
//     return (
//         <></>
//     );
// }

export const Footer = ({movieId, onDelete}) => {
    return (
        <div>
            <button onClick={() => {
                console.log('Delete clicked for movie:', movieId);
                onDelete(movieId)}}>Delete</button>
        </div>
    );
}