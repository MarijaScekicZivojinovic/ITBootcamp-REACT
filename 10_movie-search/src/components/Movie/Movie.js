import React from "react";
import { Link } from 'react-router-dom'

const NO_IMAGE_FOUND = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg"

const Movie = ({ movie }) => {

    const poster = movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster;

    const movieID = movie.imdbID;

    return (
        <div>
            <h2>{movie.Title}</h2>
            <Link to={`movieDetails/${movieID}`} target="_blank">
                <img
                    width="200"
                    src={poster}
                    alt={`The movie title is: ${movie.Title}`}
                />
            </Link>
        </div>
    )
}

export default Movie;