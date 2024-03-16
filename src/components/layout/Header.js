import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Logo from '../../logo192.png';
export default function Header() {
    return (
        <header>
            <nav>
                <h1>Logo</h1>
                <div className='brand'>
                    <img src={Logo} />
                </div>
                <Link to={`/`}>Home Page</Link>
                <Link to={`/about`}>About Page</Link>

            </nav>

        </header>
    )
}
