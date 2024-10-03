import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';   // Component-specific styles

function BookCard({ book, onRemove }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
      {onRemove && <button onClick={() => onRemove(book.id)}>Remove</button>}
    </div>
  );
}

export default BookCard;
