import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsLightningFill } from "react-icons/bs";

function Header() {
    return (
        <>
            <Navbar className="backgound-header" variant="dark">
                <Container>
                    <img
                        alt="knocksenselogo"
                        src="/whitelogo.png"
                        width="200"
                        height="60"
                    />
                    <h6 className='bookingsite_header fontloader'>BOOKING SITE <BsLightningFill /></h6>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;