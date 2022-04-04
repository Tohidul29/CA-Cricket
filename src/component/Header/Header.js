import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseball } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2 className='website-main-header'>CA CRICKET <FontAwesomeIcon icon={faBaseball}></FontAwesomeIcon></h2>
            <nav className='navbar'>
                <Link to='/home'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;