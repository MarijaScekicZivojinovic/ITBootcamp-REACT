//ovo sam sama radila
import React from "react";
import { } from './style.css'

const MovieListItem = ({ movie }) => {
    return (
        <li className="listItems">
            <h2>{movie.Title}</h2>
            <br />
            <img src={movie.Poster} alt="Movie poster" />
        </li>
    )
}

export default MovieListItem;