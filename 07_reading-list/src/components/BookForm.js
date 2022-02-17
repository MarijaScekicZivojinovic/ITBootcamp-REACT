import React, { useState, useContext } from 'react';
import BookContext from '../context/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !author.trim()) {
            alert("You need to insert text");
            return;
        }
        dispatch({
            type: 'ADD_BOOK',
            payload: {
                // title: title, je isto sto i title,
                title,
                author,
            }
        });

        setTitle("");
        setAuthor("")
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <strong>{error}</strong> : null}
            <input
                type="text"
                placeholder="Book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author's name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="submit"
                value="Add book"
            />
        </form>
    )
};

export default BookForm;