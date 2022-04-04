import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';
import './Home.css'
import Logo from '../../img/ca-bat.png'

const Home = () => {
    const [users, setUsers] = useUsers();
    const userSlicing = users.slice(0, 3);
    return (
        <div>
            <div className='main-container'>
                <div>
                    <h1 className='container-head'>One <span className='semi-head'>Company</span>, One <span className='semi-head'>Dream</span></h1>
                    <p>CA Sports is the name involved in the manufacturing and export of full range Cricket Equipment and Clothing since 1958. It is the aim of our company to always serve our worthy clients with the required equipment, especially cricket bats with nice balance, pickup, and performance. It is our company's foremost aim to serve the Cricket game as best as possible.</p>
                    <div>
                        <Link to='/about'>
                            <button className='know-more-btn'>Know More</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <h1 className='sub-head'>Top class players review about CA</h1>
            <div className='users-container'>
                {
                    userSlicing.map(user => <User
                        key={user.id}
                        user={user}
                    >
                    </User>)
                }
            </div>
            <div>
                <Link to='/reviews'>
                    <button className='show-more-btn'>Show more results</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;