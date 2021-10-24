import React from 'react';

const Card = ({book}) => {

    return (
        <div className="p-4 my-4 bg-purewhite rounded-lg w-80 font-text filter drop-shadow-md">
            <div className="">
                <img src={book.book_image} alt={book.book_name} className="w-full h-full"/>
            </div>

            <div className="py-4 px-2">
                <p className="text-blue text-sm font-bold mb-2">{book.book_genre}</p>
                <h4 className="text-black text-4xl font-heading font-semibold">{book.book_name}</h4>
                <p className="text-black text-lg">{book.book_author}</p>
            </div>
        </div>
    )
}

export default Card;