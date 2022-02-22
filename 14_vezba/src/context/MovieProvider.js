import React, { createContext, useState } from 'react';

// Na ovaj nacin smo napravili context
export const MovieContext = createContext();

const initialState = [
    {
        name: 'Harry Potter',
        price: '700',
        id: 0,
    },
    {
        name: 'LOTR',
        price: '900',
        id: 1,
    },
    {
        name: 'Batman',
        price: '500',
        id: 2,
    },
]

const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState(initialState);

    return (
        //ovo smo dobili iz instance MovieContext na 4.oj liniji kada smo kreirali Context:
        <MovieContext.Provider value={{ movies, setMovies }}>
            {/* {{movies:movies}} je isto sto i {{movies}} */}
            {/* ovaj value prosledjujemo u App.js da bi odatle bio prosledjen movieList, jer je tamo MovieList wrap-ovan u MovieProvider -> ovde imamo createContext, u MovieList moramo da imamo useContext */}
            {children}
        </MovieContext.Provider>

    )
}

export default MovieProvider;