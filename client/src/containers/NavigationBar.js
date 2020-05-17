import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const navStyle = {
        color: "white"
    }

    return (
        <NavBar style={{ backgroundColor: 'slategrey' }}>
            <Link className="p-2" style={navStyle} to="/categories">
                <Nav>Categories</Nav>
            </Link>
            <Link className="p-2" style={navStyle} to="/">
                <Nav>Merchants</Nav>
            </Link>
            <Link className="p-2" style={navStyle} to="/budgets">
                <Nav>Budgets</Nav>
            </Link>
        </NavBar>
    )
}

export default NavigationBar;