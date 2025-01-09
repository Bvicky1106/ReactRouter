import React from 'react'
import books from '../data/dataset';
import { Link } from 'react-router-dom';

function BookPage() {
  return (
    <div>
        <div className='card-header'>
            <h1>books Page</h1>
            <Link to={'/'} className='btn-danger-link'>Home page</Link>
        </div>
        <div className='card-grid'>
            {books.map((item)=>{
                return (
                    <div className='card' key={item.id}>
                        <img src={item.imageLink} alt={item.name}/>
                        <p>
                            <span className="product-details">product : </span>{item.title}
                        </p>
                        <p>
                            <span className="product-details">Author : </span>{item.author}
                        </p>
                        <p>
                            <span className="product-details">price : </span>{item.price}
                        </p>
                        <Link className="btn-link" to={`/books/${item.id}`}>View Product</Link>
                    </div>
                );
            })}

        </div>
        </div>
  )
}

export default BookPage;