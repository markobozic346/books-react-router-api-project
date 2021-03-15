import React from 'react'

function BookCover({title, subtitle, imageUrl, price, bookID}) {
    return (
        <div className='book-cover'>
            <img className='img' src={imageUrl} alt="book cover image"/>
            <h1 className='title'>{title}</h1>
            <h5 className='subtitle'>{subtitle}</h5>
            <p className='price'>{price}</p>
        </div>
    )
}

export default BookCover
