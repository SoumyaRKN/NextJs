import '../styles/Navbar.css';
import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div className='navbar'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;