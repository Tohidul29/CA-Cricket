import React from 'react';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useUsers();
    const userSlicing = users.slice(0,3);
    return (
        <div>
            <h1>This is home page</h1>
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
                <button className='show-more-btn'>Show more results</button>
            </div>
        </div>
    );
};

export default Home;