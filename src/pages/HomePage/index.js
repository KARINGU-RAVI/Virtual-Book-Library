import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LibraryContext } from '../../context/LibraryContext';
import './index.css';

const HomePage = () => {
    const { library } = useContext(LibraryContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleViewDetails = (id) => {
        navigate(`/book/${id}`); // Navigate to the book details page with the book ID
    };

    return (
        <div className="home-page">
            <h1 className='Main_Heading'>Books</h1>
            <div className="book-list">
                {library.map((book) => (
                    <div key={book.id} className="book-item">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <button onClick={() => handleViewDetails(book.id)}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
