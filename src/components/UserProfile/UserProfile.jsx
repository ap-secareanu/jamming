import React from 'react';
import './UserProfile.scss';

function UserProfile(props) {
    return (
        <div className='user_profile'>
            <img src={props.src} className='user_pic'/>
            <h2 className="user_name">{props.name}</h2>
            <p className="followers_count">Followers: <span>{props.followers}</span></p>
        </div>
    )
}

export default UserProfile;