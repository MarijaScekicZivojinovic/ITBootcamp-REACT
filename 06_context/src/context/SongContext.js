import React, { useState, createContext } from 'react'

export const SongContext = createContext();

// children has to be inside {} because it's props
const SongContextProvider = ({ children }) => {

    const [songs, setSongs] = useState([
        { title: "Shook ones", id: 0 },
        { title: "Juicy", id: 1 },
        { title: "Stan", id: 2 },
    ])
    return (
        <SongContext.Provider
            value={{ songs }}
        >
            {children}
        </SongContext.Provider>
    )
}

export default SongContextProvider;