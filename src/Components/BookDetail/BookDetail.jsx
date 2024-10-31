import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList, addToStoreWishList } from '../../utility/addToDB';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const {bookId: currentBookId, bookName, image } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save : => bookId
         * 2. where to store : database
         * 3. array, list, collection:
         * 4. check : if the book is already in the readlist
         * 5. if not, them add the book to the list
         * 6. if you, do not add the book
         */
        addToStoreReadList(id)
        
    }
    const handleWishList = (id) => {
        addToStoreWishList(id)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold mb-6">{bookName}</h1>
                    
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-6 btn-primary">Mark as Read</button>
                    <button onClick={() => handleWishList(bookId)} className="btn btn-primary">Add to WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;