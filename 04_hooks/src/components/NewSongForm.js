import React, { useState } from 'react'

//ovo je child, i tu prosledjujemo funkciju kao props (addsong)
const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');

    // const addSong = () => {
    //     // props.setSong([...props.songs, { title: title, is: props.length + 1 }])
    //     props.setSong([...props.songs, { title, is: props.length + 1 }])
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title)
    }

    return <form style={{ marginTop: 20 }} onSubmit={handleSubmit}>
        <label style={{ marginRight: 5 }}>Song Name</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input style={{ marginLeft: 10 }} type="submit" value="Add" />
    </form>
}

export default NewSongForm;