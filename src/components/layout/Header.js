import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            header
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/page2'>Page 2</Link>
                </li>
            </ul>
        </header>
    )
}
