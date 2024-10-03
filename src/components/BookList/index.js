import React from 'react';
import BookCard from '../BookCard';
import './index.css';   // Component-specific styles

function BookList({ books, onRemove }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default BookList;
