import React from 'react';
import './NotFound.css'
import Logo from '../../img/404-img.jpg'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img src={Logo} alt="" />
        </div>
    );
};

export default NotFound;