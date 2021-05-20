import '../App.css';
import React from 'react';


function User (props) {
    const { user } = props;
    return (
        <div className='container'>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            {
                user.terms
                ? <p>{user.name} agreed to the terms of service.</p>
                : <p>{user.name} did NOT agree to the terms of service.</p>
            }           
        </div>
    )
}

export default function UserList(props) {
    const { users } = props;

    return (
        <div className='container'>
            {
                users.map((user, idx) => {
                    return <User key={idx} user={user} />;
                })
            }
        </div>
    )
}