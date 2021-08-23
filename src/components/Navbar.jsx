import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <a className='navbar-image'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IVVIpWz_R8kLI17rrHrRCBEx_M4txqcgrg&usqp=CAU" width="50" height="50"
                />
            </a>

            <form className='searchbar'>
                <input className='searchInput' type="search" placeholder='Type to Search' />
            </form>

            <div class="navbar-navigation">
                <ul class="navbar-btn">
                    <li class="home-item">Home</li>
                    <li class="message-item">Messenger</li>
                    <li class="friend-item">Friends</li>
                    <li class="campus-item">Campus</li>
                </ul>
            </div>
        </div>
    )
}
