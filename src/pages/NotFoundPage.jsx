import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='not-found'>
        <p>404</p>
        <p className='error-message'> Page not Found</p>
        <Link to={'/'} >home</Link>
    </div>
  )
}

export default NotFoundPage;