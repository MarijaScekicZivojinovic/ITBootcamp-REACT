import React, { useEffect, useReducer } from 'react';
import API from '../config/api';
import { apiKey } from '../config/apiKey'; //mora unutar {} jer us apiKey.js nismo stavili export DEFAULT
import { initialState, reducer } from "../reducer";
import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_FAILED, SEARCH_MOVIES_SUCCESS } from '../reducer/types';
import Movies from '../components/Movie/Movies';
import Loading from '../components/Loading/Loading';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Search from '../components/Search/Search';

const Home = () => {
    //const [state, dispatch] = useReducer(reducerName, initialState (e.g. []))
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    const { movies, errorMessage, loading } = state;

    const handleMovieSearch = (movie) => {
        //primer:
        //http://www.omdbapi.com/?s=batman&apikey=fe313c33
        API.get(`?s=${movie}&${apiKey}`).then((res) => {
            // console.log(res.data);
            // ovde more camel case:
            if (res.data.Response === 'True') {
                dispatch({
                    type: SEARCH_MOVIES_SUCCESS,
                    payload: res.data.Search,
                })
            } else {
                dispatch({
                    type: SEARCH_MOVIES_FAILED,
                    payload: res.data.Error,
                    //payload: 'movie not found or bad request'
                })
            }
        });
    };
    useEffect(() => {
        handleMovieSearch('batman');
    }, []);

    return (
        <div>
            {/* <p>
                <input type="search" name="" id="" onChange={handleChange} />
            </p> */}
            <Search handleMovieSearch={handleMovieSearch} />
            {
                loading && !errorMessage ? (
                    <Loading />
                ) : errorMessage ? (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    // ) : <MovieList movies={movies} />
                ) : <Movies movies={movies} />
            }
        </div>
    )
}

export default Home;
