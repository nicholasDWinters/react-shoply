import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ cart, total }) => {
    return (
        <div>
            <NavLink style={{ marginRight: '10px' }} exact to='/'>Home</NavLink>
            <NavLink style={{ marginRight: '10px' }} exact to='/cart'>Cart</NavLink>
            <p>{cart.length} items - ${total.toFixed(2)}</p>
        </div>
    )
}

export default NavBar;