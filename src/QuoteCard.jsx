import React from 'react';

const QuoteCard = ({ quote }) => {
  return (
    <div className="col-md-12">
        <div className='card mt-2'>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{quote.text}</p>
                <footer className="blockquote-footer">- {quote.author}</footer>
                </blockquote>
            </div>
        </div>
    </div>
  );
};

export default QuoteCard;
