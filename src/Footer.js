import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <Navbar className="backgound-header" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h6>₹1000 ONWORDS</h6>
                    </Navbar.Brand>
                    <Link exact to="/BookTickets" style={{textDecoration: 'none' }} className='bookingsite_footer fontloader' >BUY NOW</Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer;