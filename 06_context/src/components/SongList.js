import React, { useState, useContext } from 'react';
import { SongContext } from '../context/SongContext';
import { ThemeContext } from '../context/ThemeContext';

const SongList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { songs } = useContext(SongContext)

    // const [songs, setSongs] = useState([
    //     { title: 'Shook ones', id: 0 },
    //     { title: 'Juicy', id: 1 },
    //     { title: 'Hypnotize', id: 2 }
    // ])

    return (
        <>
            <h2>My song list</h2>
            <ul style={{
                background: theme.bg,
                width: "50%",
                marginLeft: "50%",
                transform: "translate(-50%)"
            }}>
                {songs.map((song, index) => {
                    return <li
                        key={index}
                        style={{ background: theme.ui, color: theme.syntax }}
                    >{song.title}</li>
                })}
            </ul>
        </>
    )
}

export default SongList;