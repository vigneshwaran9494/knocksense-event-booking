import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillGeoAltFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Homepage() {
    return (
        <>
            <Header />
            <img src="./homepage_banner.jpg" className="image-fluid" width="100%" alt="Responsive_image" />
            <div style={{ textAlign: "center" }}> <br />
                <button type="button" className="btn festbutton">FEST</button>

                <h1>The Indian Music Fest Ticket </h1>
                <h3>(With 2 Drinks)</h3>
                <h6> <BsFillCalendarCheckFill /> 20 Nov 2022 at 04:00 PM</h6>
                <h6> <BsFillGeoAltFill /> Outhouse By Offline, Kanpur</h6>
            </div>
            <h6>
                <Card>
                    <div className='container'>
                        <Card.Img className="image-container" src="./homepage_banner.jpg" />
                        <Card.Body>
                            <Card.Title>The Indian Music Fest</Card.Title>
                            Pro Tip- Get you tickets today as price are dynamic.
                            Tickets includes one complimentary drink (Beer, Aerated Beverages).
                            Drink will be served in Cans.
                        </Card.Body>
                    </div>
                    <Card.Body>
                        For existing Platinum/Select Members: Click on book tickets <br />
                        {'->'} Type your name & registered phone number {'->'} Click on proceed to get membership wise pricing.
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            {'->'} Ticket Price for Select & Select Mini Members: Rs 300 <br />
                            {'->'} Rs:400 Off for Platinum Members<br />
                            {'->'} Ticket Price for a Non-KnockOFF Member: Rs1000<br />
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <center>
                            <NavLink exact to="/BookTickets" type="button" className="btn .text-center" style={{ backgroundColor: "#ee7e1a" }}>Book your Tickets & Download the knocksense App to get your
                                tickets</NavLink>
                        </center>
                    </Card.Body>
                </Card>
            </h6>
            <Footer />
        </>
    )
}
export default Homepage;