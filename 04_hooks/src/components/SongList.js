import React, { useState } from 'react';
import NewSongForm from './NewSongForm';
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Shook ones', id: 0 },
        { title: 'Juicy', id: 1 },
        { title: 'Hypnotize', id: 2 }
    ])

    const addSong = (title) => {
        // setSongs([...songs, { title, id: songs.length + 1 }])
        setSongs([...songs, { title, id: uuidv4() }])
    }
    return <>
        <h2>My song list</h2>
        {songs.map((element, index) => {
            return <li key={index}>{element.title}</li>
        })}

        <NewSongForm addSong={addSong} />
    </>
}

export default SongList;