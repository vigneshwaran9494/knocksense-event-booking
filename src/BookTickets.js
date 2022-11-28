import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function BookTickets() {
  return (
    <>
      <div className="text-center booktickets container-fluid fontloader" >
        <div><b>BOOK TICKETS</b> </div>

        <div className="container book-details">
          <div >
            <div className="col">
              Premium Ticket (with 2 drinks)
            </div>
            <div className="col-4">
              Rs. 1000
            </div><br />
            <div className="col-7">
              <DropdownButton title="View Details" variant="secondary">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div>
            <div className="col-12 fontloader" style={{ color: "#ee7e1a", marginLeft: "40px" }}>
            <img src="./minus.png" alt="minus"/> &nbsp; <b>ADD</b> &nbsp;
            <img src="./plus.png" alt="plus"/>
            </div>
          </div>
        </div>
        <br />

        <Container className="book-details">
          <Row>
            <Col>
              <InputGroup className="mb-6">
                <input type="text" class="form-control" id="exampleInputphoneno" name="phoneno" placeholder="Name"/>
              </InputGroup>
            </Col>

            <Col>
              <InputGroup className="mb-3">
                <input type="text" class="form-control" id="exampleInputphoneno" name="phoneno" placeholder="Contact Number" />
              </InputGroup>
            </Col>
          </Row>
        </Container>

        <Link exact to="/checkout" style={{textDecoration: 'none' }} className='bookticket_submit fontloader'>SUBMIT DETAILS</Link>
      </div>
    </>
  )
}

export default BookTickets;