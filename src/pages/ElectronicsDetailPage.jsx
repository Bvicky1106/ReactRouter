import React from 'react'
import { electronics } from '../data/dataset'
import { useParams } from 'react-router-dom';





function ElectronicsDetailPage() {
    const {id }= useParams();
    const item = electronics.find((x)=>x.id === parseInt(id));


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
                    <span className='product-details'>product :</span>{item.name}
                </p>
                <p>
                    <span className='product-details'>price :</span>{item.price}
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default ElectronicsDetailPage