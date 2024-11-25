import React from 'react';
import bg from '/public/bg.png';
import MazarInfo from '../../components/book/MazarInfo';
import Form from '../../components/book/Form';
import FormPage from '../../components/book/FormPage';

export default function Book() {
  return (
    <div className='book-main-page' style={{backgroundImage: `url(${bg.src})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
        <div className="overlay"></div>
        <div className="container m-auto">
            <div className="book-cont">
            <MazarInfo></MazarInfo>
            <FormPage></FormPage>
            {/* <Form></Form> */}
            </div>
        </div>
    </div>
  );
}
