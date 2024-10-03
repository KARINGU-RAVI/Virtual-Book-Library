import React, { createContext, useState, useEffect } from 'react';
import booksData from '../services/books.json';

export const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        setLibrary(booksData); // Load books data from JSON
    }, []);

    const addToLibrary = (book) => {
        setLibrary((prev) => [...prev, book]);
    };

    const removeFromLibrary = (bookId) => {
        setLibrary((prev) => prev.filter(book => book.id !== bookId));
    };

    return (
        <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;
