import React from 'react'
import { useParams } from 'react-router'

const Book = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>this is book {id}page </h1>
        </div>
    )
}

export default Book
