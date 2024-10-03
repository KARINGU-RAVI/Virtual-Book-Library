import React, { useContext } from 'react';
import { LibraryContext } from '../../context/LibraryContext';
import './index.css';

const MyLibraryPage = () => {
    const { library, removeFromLibrary } = useContext(LibraryContext);

    return (
        <div className="my-library-page">
            <h1>My Library</h1>
            <div className="book-list">
                {library.map((book) => (
                    <div key={book.id} className="book-item">
                        <h2>{book.title}</h2>
                        <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyLibraryPage;
