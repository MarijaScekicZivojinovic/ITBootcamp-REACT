import React, { createContext, useState } from "react";

export const CinemaContext = createContext();

const initialState = [
    {
        name: 'Cineplex',
        id: 1,
    },
    {
        name: 'Vilin Grad',
        id: 2,
    }
];

const CinemaProvider = ({ children }) => {
    const [cinema, setCinema] = useState(initialState);

    return (
        <CinemaContext.Provider value={{ cinema }}>
            {/* value se prosledjuje kao objekat, zato duplo {{}} */}
            {/* obezbedjuje context koji ce da prosledjuje deci */}
            {children}
        </CinemaContext.Provider>
    )
};

export default CinemaProvider;