import React from 'react'
import { useParams } from 'react-router-dom';
import Contact from './Contact';

const BookShow = () => {
  const {id} = useParams(); 
  return (
    <div className='center'>
        <h1>Book {id}</h1>
        <Contact/>
    </div>
  )
}

export default BookShow;
