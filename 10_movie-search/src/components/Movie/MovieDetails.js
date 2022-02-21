import React, { useState } from "react";
import { movieID } from "./Movie";
import API from '../../config/api';
import { apiKey } from '../../config/apiKey';
import "./style.css"

const MovieDetails = () => {

    // AXIOS URL CALL
    // http://www.omdbapi.com/?i=${movieId}&${apiKey}
    //klikom na sliku da redirektuje na drugu stranicu sa podacima
    const [movie, setMovie] = useState('');


    return <div className="wrapper">
        <div>
            <h2>{movie.Title}</h2>
            <section>
                <ul>
                    <li>{movie.Year}</li>
                    <li>{movie.Rated}</li>
                    <li>{movie.Runtime}</li>
                </ul>
            </section>
        </div>
        <div className="ratingBar">
            <p>IMDb Rating: {movie.imdbRating}/10</p>
            <p>{movie.imdbVotes}</p>
        </div>
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            {/* napravi kapsulice sa imdb, ubaci {movie.Genre} */}
            <p>{movie.Plot}</p>
            <ul>
                <li>Director {movie.Director}</li>
                <li>Writers
                    <ul>
                        {/* prodji kroz writers niz */}
                    </ul>
                </li>
                <li>Stars
                    <ul>
                        {/* prodji kroz actors niz */}
                    </ul>
                </li>
            </ul>
        </div>
    </div>
}

export default MovieDetails;