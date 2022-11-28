import React, { useEffect } from "react";
import {
  BsFillGeoAltFill,
  BsFillCalendarCheckFill,
  BsFillStopwatchFill,
} from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { Button } from "react-bootstrap";
import { Configuration } from "./Config";

function Checkout({ eventDetails, ticketDetails, proceedPaytmPayment }) {
  const { Attendee_data } = ticketDetails;
  const ticket = eventDetails.ticket[0];

  async function callTicketPaymentApi() {
    const body = {
      tickets: [{ ticket_id: ticket.id, quantity: Attendee_data.length }],
      total: ticketDetails.total,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Configuration.AUTH_TOKEN,
      },
      body: JSON.stringify(body),
    };
    fetch(
      `${Configuration.BASE_URL}event/${eventDetails.id}/ticket-payment`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          console.log("ticketPaymentResponse", data);
          if (data && data.data) {
            proceedPaytmPayment(data.data);
          }
        }
      });
  }

 

  return (
    <>
      <div className="text-center booktickets container-fluid fontloader">
        <h3>CHECKOUT </h3>

        <div>
          <div className="container-fluid booktickets">
            <Card.Img
              className="image-container"
              src={eventDetails.thumbnail_image}
            />
            <Card.Body>
              <h3>{eventDetails.name}</h3>
              <hr style={{ height: "10px", color: "white" }}></hr>
              <div className="row fontloader">
                <div className="col-7">
                  <h6>
                    {" "}
                    <BsFillCalendarCheckFill />{" "}
                    {moment(eventDetails.date).format("ddd, DD MMM YYYY")}
                  </h6>
                </div>

                <div className="col-5">
                  <h6>
                    {" "}
                    <BsFillStopwatchFill />{" "}
                    {moment(eventDetails.start_time).format("hh:mm A")} Onwards
                  </h6>
                </div>
              </div>{" "}
              <br />
              <h6>
                {" "}
                <BsFillGeoAltFill /> {eventDetails.location},{" "}
                {eventDetails.locality && eventDetails.locality.name}
              </h6>
            </Card.Body>
          </div>
        </div>

        <div className=" book-details fontloader">
          <div className="row">
            <div className="col">USER DETAILS</div>

            <div className="col-6">
              <></>
            </div>
            <div className="col">PRICE</div>
          </div>
          <br />
          {Attendee_data.map((attendee) => (
            <div className="row fontloader">
              <hr
                style={{ height: "10px", width: "200%", color: "#0b98af" }}
              ></hr>

              <div className="col">
                <b style={{ marginRight: "35%" }}>{attendee.name}</b>
              </div>

              <div className="col-5"></div>
              <div className="col">
                <b>₹ {ticket.price}</b>
              </div>

              <div className="row">
                <div className="col">
                  <b>{attendee.mobile}</b>
                </div>
                <div className="col-6">
                  <></>
                </div>
                <div className="col">
                  <div className="col" style={{ color: "#ee7e1a" }}>
                    {attendee.plan}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              <b>₹ {ticketDetails.total}</b>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-5"></div>
            <div className="col"></div>
          </div>
        </div>

        {/* <NavLink
          exact
          type="button"
          className="checkout_submit fontloader btn"
          style={{ backgroundColor: "#ee7e1a" }}
        >
          {" "}
          <b>PROCEED TO PAY</b>{" "}
        </NavLink> */}
        <Button
          onClick={() => {
            callTicketPaymentApi();
          }}
        >
          SUBMIT DETAILS
        </Button>
      </div>
    </>
  );
}

export default Checkout;
