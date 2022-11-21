import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <button><Link to="/reducer-hook">useReducerHook</Link></button>
            <button><Link to="/context">Context Api</Link></button>
        </div>
    )
}

export default Navbar