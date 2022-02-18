//movies.map(movie => movie.Title) //ubaci i sliku
//ovo sam sama radila
import React from "react";
import MovieListItem from './MovieListItem';
import { } from './style.css'

const MovieList = ({ movies }) => {
    return (
        <ul className="listMain">
            {
                movies.map((movie) =>
                    <MovieListItem
                        key={movie.imdbID}
                        movie={movie}
                    />
                )
            }
        </ul>
    )
}

export default MovieList;