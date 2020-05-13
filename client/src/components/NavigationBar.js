import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <NavBar style={{backgroundColor: 'slategrey'}}>
            <Nav>This is the NavigationBar component</Nav>
        </NavBar>
    )
}

export default NavigationBar;