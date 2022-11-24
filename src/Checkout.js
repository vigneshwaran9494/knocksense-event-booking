import React from 'react'
import { BsFillGeoAltFill, BsFillCalendarCheckFill, BsFillStopwatchFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <>
      <div className="text-center booktickets container-fluid" >
        <h3>CHECKOUT </h3>  

        <div>
          <div className='container-fluid booktickets'>
            <Card.Img className="image-container" src="./homepage_banner.jpg" />
            <Card.Body>
              <h3>The Indian Music Fest Ticket</h3>

              <hr style={{ height: "10px", color: "white" }}></hr>


              <div class="row">
                <div class="col-7">
                  <h6> <BsFillCalendarCheckFill /> 20 Nov 2022 at 04:00 PM</h6>
                </div>

                <div class="col-5">
                  <h6> <BsFillStopwatchFill /> 04:00 PM Onwards</h6>
                </div>
              </div> <br />

              <h6> <BsFillGeoAltFill /> Outhouse By Offline, Kanpur</h6>
              {/* <h6> <BsFillCalendarCheckFill /> 20 Nov 2022 at 04:00 PM</h6>
              <h6> <BsFillStopwatchFill /> 04:00 PM Onwards</h6> */}
            </Card.Body>
          </div>
        </div>

        <div class=" book-details">
          <div class="row">
            <div class="col">
              USER DETAILS
            </div>

            <div class="col-6">
              <></>
            </div>
            <div class="col">
              PRICE
            </div>
          </div>
          <br />

          <div class="row">
            <hr style={{ height: "10px", width: "200%", color: "#0b98af" }}></hr>
            <div class="col" >
              <b style={{ marginRight: "35%" }}>6g</b>
            </div>

            <div class="col-5">
            </div>
            <div class="col">
              <b> RS.99.00</b>
            </div>

            <div class="row">
              <div class="col">
                <b>9044234231</b>
              </div>
              <div class="col-6">
                <></>
              </div>
              <div class="col">
                <div class="col" style={{ color: "#ee7e1a" }}>PLATINEUM</div>
              </div>
            </div>
          </div>
        </div>

        <div class=" book-details">
          <div class="row">
            <div class="col">
              <b>TOTAL</b>
            </div>
            <div class="col-6">
              <></>
            </div>
            <div class="col">
              <b> RS.99.00</b>
            </div>
          </div>
          <div class="row">
            <div class="col">
            </div>
            <div class="col-5">
            </div>
            <div class="col">
            </div>
          </div>
        </div>

        <NavLink exact to="/Thankyoupage" type="button" className='checkout_submit btn' style={{ backgroundColor: "#ee7e1a" }}> <b>PROCEED TO PAY</b> </NavLink>
      </div>
    </>

  )
}

export default Checkout;