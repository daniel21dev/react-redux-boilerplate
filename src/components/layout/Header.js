import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="w-full h-12 bg-gray-800 text-white shadow-2xl px-4 py-1 flex justify-between">
            <Link to='/' className="text-3xl cursor-pointer"
            >App</Link>
            <ul className="flex items-center">
                <li className="mx-2 hover:text-green-500">
                    <Link to='/'>Home</Link>
                </li>
                <li className="mx-2 hover:text-green-500">
                    <Link to='/page2'>Page 2</Link>
                </li>
            </ul>
        </header>
    )
}
