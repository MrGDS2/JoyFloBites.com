
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavigationBar = () => {


    return (

        <React.Fragment>
            <div className="pt-4 container  nav-top">

                <Navbar expand="lg">
                <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mx-auto nav" >
                            <Nav.Item><Nav.Link href="/" activeclassname="selected" className="ml-5 mr-5">About</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/Products" className="ml-5 mr-5">Bites</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/#gallery" className="ml-5 mr-5">Flo's Favs</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/Community" className="ml-5 mr-5">Community</Nav.Link></Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </React.Fragment>
    )

}

export default NavigationBar;