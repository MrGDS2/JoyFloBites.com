  
import React, { useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {

    // const ref = useRef(null);

    // const handleClick = () => {
    //     ref.current.showModal();
    // }

    return (

        <React.Fragment>
<div className="pt-4 container sticky-top nav-top">
                
<Navbar expand="lg">
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mx-auto nav" >
            <Nav.Item><Nav.Link href="/" activeclassname="selected" className="ml-5 mr-5">About Us</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link activeclassname="selected" href="/#about" className="ml-5 mr-5">Our Products</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link activeclassname="selected" href="/#gallery" className="ml-5 mr-5">Delivery</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link activeclassname="selected" href="/#footer" className="ml-5 mr-5">Network</Nav.Link></Nav.Item>

        </Nav>
    </Navbar.Collapse>
</Navbar>
</div>

</React.Fragment>
    )

}

export default NavigationBar;