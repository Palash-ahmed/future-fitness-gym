import React from 'react';
import './Header.css'

const Header = () => {
    return (
           <nav className = 'header'>
           <h1 className='future-fitness'>Future<span id='fit'>Fitness</span></h1>
            <div className='anchor'>
                <a href = "/fitness">Future Fitness</a>
                <a href = "/join">Join</a>
                <a href = "/club">Your Club</a>
                <a href = "/training">Your Training</a>
                <a href = "/contact">Contact Us</a>
            </div>
        </nav>
    );
};

export default Header;