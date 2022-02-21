import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import API from '../../config/api';
import { apiKey } from '../../config/apiKey';
import "./style.css";

const NO_IMAGE_FOUND = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";

// check the solution found in: https://stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react/68967670#68967670

const MovieDetails = () => {

    // AXIOS URL CALL
    // http://www.omdbapi.com/?i=${movieId}&${apiKey}
    //klikom na sliku da redirektuje na drugu stranicu sa podacima
    // console.log(params);
    const { movieId } = useParams();
    // console.log(movieId);
    const [movie, setMovie] = useState('');

    const poster = movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster;

    useEffect(async () => {
        //renders on mounting // poziva se samo na ucitavanje stranice -> ,[]
        await API.get(`?i=${movieId}&${apiKey}`)
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


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
            <img src={poster} alt={movie.Title} />
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