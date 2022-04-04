import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './User.css'

const User = ({user}) => {
    const {name, img, review, rating} = user;
    return (
        <div className='user-container'>
            <div className='user-name-img'>
                <h2>{name}</h2>
                <img src={img} alt="" />
            </div>
            <div>
                <p>{review}</p>
            </div>
            <div className='user-rating mb-0'>
                <h3><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Rating: {rating}/5</h3>
            </div>
        </div>
    );
};

export default User;