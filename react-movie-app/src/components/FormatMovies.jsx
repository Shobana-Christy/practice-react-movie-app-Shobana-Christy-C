

const FormatMovies = (props) => {


    if (Array.isArray(props.movies)) {
        return (
            <div>
                <ul>
                    {/* Use the map method to iterate over the 'items' array */}
                    {props.movies.map((movie) => (
                        // Each item rendered from a loop needs a unique 'key' prop
                        <li key={movie.id}>
                            {movie.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FormatMovies;