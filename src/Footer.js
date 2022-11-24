import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Footer({price}) {
    return (
        <>
            <Navbar className="backgound-header" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h6>₹{price} ONWORDS</h6>
                    </Navbar.Brand>
                    <Link exact to="/BookTickets" className='bookingsite_footer' >BUY NOW</Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer;