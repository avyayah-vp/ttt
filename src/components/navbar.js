import React from 'react';
import { Navbar, Button, Image } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar style={{ backgroundColor: 'black', borderTop: '3px solid gold', display: 'flex', justifyContent: 'space-between', padding: '15px 15px' }} variant="dark">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/images/logo.png" width="50" height="50" />
                <div style={{ borderLeft: '2px solid gold', height: '30px', margin: '0 15px' }}></div>
                <Navbar.Brand href="#home">S T O R I E S</Navbar.Brand>
            </div>
            <Button variant="warning" style={{ borderRadius: '50px', fontWeight: 'bold' }}>Courses</Button>
        </Navbar>
    );
}

export default NavBar;
