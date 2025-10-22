import React, { useState } from "react";
import Spinner from "./Spinner";
import FormatMovies from "./formatMovies";


const MovieSelector = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [error, setError] = useState("");


    const displayMovies = (genre) => {

        setIsLoading(true);
        setMovies("");
        setError("");
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            if (genre === "action") {
                console.log("action");
                setMovies([{ name: "Die Hard", id: 1 }, { name: "Matrix", id: 2 }, { name: "Raiders of the lost Ark", id: 3 }]);
            } else if (genre === "comedy") {
                setMovies([{ name: "Hang Over", id: 1 }, { name: "Wedding Crashers", id: 2 }, { name: "Horrible Boses", id: 3 }]);
            } else if (genre === "drama") {
                setMovies([{ name: "Forest Gump", id: 1 }, { name: "God Father", id: 2 }, { name: "Shawshamk redemption", id: 3 }])
            }
            else {
                setError("Error: No genre selected");
            }
        }

            , 5000);

    }


    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    }


    return (
        <div>
            <label>
                Genre:
                <select value={selectedGenre} onChange={handleChange}>
                    <option value=""></option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>
            </label>

            <button onClick={() => displayMovies(selectedGenre)}>
                Fetch Movies
            </button>

            {(error !== "") && <p>{error}</p>}


            <div>
                {isLoading && <Spinner />}
            </div>

            <FormatMovies movies={movies} />


        </div>
    )
}

export default MovieSelector;