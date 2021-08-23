import React from 'react';
import './PostBody.css';
import Groups from './Groups';
import Posts from './Posts';
import Contacts from './Contacts';

export default function PostBody() {
    return (
        <div className='bodyContainer'>
            <Groups />
            <Posts />
            <Contacts />
        </div>
    )
}
