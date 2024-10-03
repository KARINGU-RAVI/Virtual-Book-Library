import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../../context/LibraryContext';
import './index.css';

const BookDetailsPage = () => {
    const { id } = useParams();
    const { library, addToLibrary } = useContext(LibraryContext);
    const book = library.find((b) => b.id === id);

    const handleAddToLibrary = () => {
        addToLibrary(book);
    };

    if (!book) {
        return <div>Book not found.</div>;
    }

    return (
        <div className="book-details-page">
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <button onClick={handleAddToLibrary}>Add to My Library</button>
        </div>
    );
};

export default BookDetailsPage;
