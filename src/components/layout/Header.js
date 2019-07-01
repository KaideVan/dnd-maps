import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To do list</h1>
            <Link style={linkStyle} to="/dnd-maps">Home</Link> | <Link style={linkStyle} to="/dnd-maps/about">About</Link>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
