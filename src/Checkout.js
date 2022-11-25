import React from 'react'
import { BsFillGeoAltFill, BsFillCalendarCheckFill, BsFillStopwatchFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <>
      <div className="text-center booktickets container-fluid fontloader" >
        <h3>CHECKOUT </h3>  

        <div>
          <div className='container-fluid booktickets'>
            <Card.Img className="image-container" src="./homepage_banner.jpg" />
            <Card.Body>
              <h3>The Indian Music Fest Ticket</h3>

              <hr style={{ height: "10px", color: "white" }}></hr>


              <div className="row fontloader">
                <div className="col-7">
                  <h6> <BsFillCalendarCheckFill /> 20 Nov 2022 at 04:00 PM</h6>
                </div>

                <div className="col-5">
                  <h6> <BsFillStopwatchFill /> 04:00 PM Onwards</h6>
                </div>
              </div> <br />

              <h6> <BsFillGeoAltFill /> Outhouse By Offline, Kanpur</h6>
              {/* <h6> <BsFillCalendarCheckFill /> 20 Nov 2022 at 04:00 PM</h6>
              <h6> <BsFillStopwatchFill /> 04:00 PM Onwards</h6> */}
            </Card.Body>
          </div>
        </div>

        <div className=" book-details fontloader">
          <div className="row">
            <div className="col">
              USER DETAILS
            </div>

            <div className="col-6">
              <></>
            </div>
            <div className="col">
              PRICE
            </div>
          </div>
          <br />

          <div className="row fontloader">
            <hr style={{ height: "10px", width: "200%", color: "#0b98af" }}></hr>
            <div className="col" >
              <b style={{ marginRight: "35%" }}>6g</b>
            </div>

            <div className="col-5">
            </div>
            <div className="col">
              <b> RS.99.00</b>
            </div>

            <div className="row">
              <div className="col">
                <b>9044234231</b>
              </div>
              <div className="col-6">
                <></>
              </div>
              <div className="col">
                <div className="col" style={{ color: "#ee7e1a" }}>PLATINEUM</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" book-details fontloader">
          <div className="row">
            <div className="col">
              <b>TOTAL</b>
            </div>
            <div className="col-6">
              <></>
            </div>
            <div className="col">
              <b> RS.99.00</b>
            </div>
          </div>
          <div className="row">
            <div className="col">
            </div>
            <div className="col-5">
            </div>
            <div className="col">
            </div>
          </div>
        </div>

        <NavLink exact to="/Thankyoupage" type="button" className='checkout_submit fontloader btn' style={{ backgroundColor: "#ee7e1a" }}> <b>PROCEED TO PAY</b> </NavLink>
      </div>
    </>

  )
}

export default Checkout;