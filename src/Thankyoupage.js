import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { BsFillShareFill } from "react-icons/bs";

function Thankyoupage() {
    return (
        <div>
            <Navbar className="container-row">
                <img
                    alt="knocksenselogo"
                    src="/knocksenselogo.png"
                    height="65px"
                    className="col-3 mx-auto" />
            </Navbar>

            <div style={{ backgroundColor: "#1e9ab0" }}>
                <div className='checkoutbody'>
                    <h5> Booking Successful! <br />
                        Download the knocksense App to view<br />
                        your Ticket</h5>
                    <button type="button" className="btn" style={{ backgroundColor: "#ee7e1a", marginTop: "20px", color: "white" }}><b>DOWNLOAD NOW</b></button>
                </div>

                <div className="container">
                    <img
                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                        className='img-thumbnail imgthumbnai_new'
                        alt='thankyouimage'
                        style={{ border: "10px" }}
                    />
                </div><br />

                <div>
                    <div className="container">
                        <h6 className='checkout-titletext' style={{ backgroundColor: "white", color: "#ee7e1a" }}>I' am attending <b>The Indie Music Fest</b></h6>
                    </div>

                    <div className="container">
                        <h6 className='checkout-Areyou' style={{ backgroundColor: "#ee7e1a", color: "white" }}><b>ARE YOU???</b></h6>
                    </div>

                    <div className="container">
                        <h6 className='checkout-share'><b>SHARE</b>  <BsFillShareFill /></h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Thankyoupage;