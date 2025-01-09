import React from 'react'
import { useParams } from 'react-router-dom';
import books from '../data/dataset';

function BookDetailPage() {
    const {id }= useParams();
    const item = books.find((x)=>x.id === parseInt(id));


    if(!item){
        return(
            <div>
                <h1>ITEMS NOT FOUND</h1>
            </div>
        )
    }
  return (
    <div className='sidebar'>
        <h1>Product Details</h1>
        <div className='sidebar-content'>
            <div className='product'>
                <img src={item.imageLink} alt={item.name} />
                <p>
                    <span className='product-details'>product :</span>{item.title}
                </p>
                <p>
                    <span className='product-details'>price :</span>{item.author}
                </p>
                <p>
                    <span className='product-details'>price :</span>{item.price}
                </p>
                
                
            </div>
        </div>
    </div>
  )
}

export default BookDetailPage