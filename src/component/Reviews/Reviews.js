import React from 'react';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';
import './Review.css';

const Reviews = () => {
    const [users, setUsers] = useUsers();
    return (
        <div>
            <h1 className='main-head'>World Class Cricketers Review About CA</h1>
            <div className='players-container'>
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                    >
                    </User>)
                }
            </div>
        </div>
    );
};

export default Reviews;