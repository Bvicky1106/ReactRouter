import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='conatiner'>
        <h1>Welcome to the Shop</h1>
        <div className='home'>
            <img 
            className='banner'
            src='https://academy-cdn.wedio.com/2022/06/jpeg-format.jpg'
            alt='img'
            />
            <div className='category'>
                <h1>pick your category</h1>
                <div className='links'>
                    <Link to={"/electronics"} className='link'>ELECTRONICS</Link>
                    <Link to={"/books"} className='link'>BOOKS</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage;