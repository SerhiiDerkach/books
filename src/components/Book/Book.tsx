import React from 'react';
import './Book.css'

export type BooksType = {
    id: number,
    name: string,
    price: number,
    category: string
}

type PropsType = {
    book: BooksType
    totalPrice: (book: { id: number, name: string, price: number, category: string }) => void
}

const Book: React.FC<PropsType> = React.memo(({book, totalPrice}) => {
        return (
            <div className={'book'}>
                <div className="book__body">
                    <div className="book__column" onClick={() => totalPrice(book)}>
                        <div className="book__number">
                            {book.id}
                        </div>
                        <div className="book__name">
                            {book.name}
                        </div>
                    </div>
                    <div className="book__column">
                        <div className="book_price">
                            {book.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
)

export default Book;