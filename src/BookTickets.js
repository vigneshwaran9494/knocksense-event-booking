
import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Configuration } from "./Config";
import { Link } from "react-router-dom";

function BookTickets({ eventDetails, onSubmitPressed }) {
  const ticket = eventDetails.ticket[0];

  const [formFields, setFormFields] = useState([{ name: "", mobile: "" }]);

  const [error, setError] = useState(true);
  const [errorMsg, setErrorMessage] = useState("");

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    if (event.target.name === "name") {
      data[index][event.target.name] = event.target.value;
    } else {
      const re = /^[0-9\b]+$/;
      if (event.target.value === "" || re.test(event.target.value)) {
        data[index][event.target.name] = event.target.value.substring(0, 10);
      }
    }

    setFormFields(data);
  };

  const submit = (e) => {
    const result = formFields.filter(
      (obj) => obj.name === "" || obj.mobile === ""
    );
    if (result.length) {
      setError(true);
      setErrorMessage("Name and Mobile number could't be empty field");
      return;
    }
    const result1 = formFields.filter(
      (obj) => obj.mobile.length < 10 || obj.mobile.length > 10
    );
    if (result1.length) {
      setError(true);
      setErrorMessage("Enter valid mobile number");
      return;
    }
    e.preventDefault();
    setError(false);
    callBookTicketApi();
  };

  async function callBookTicketApi() {
    const body = {
      tickets: [{ ticket_id: ticket.id, quantity: formFields.length }],
      attendee_list: formFields,
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
      `${Configuration.BASE_URL}event/${eventDetails.id}/book-ticket`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          console.log("ticketBookingResponse", data);
          if (data && data.data) {
            onSubmitPressed(data.data);
          }
        } else if (data.status === "ERROR") {
          setErrorMessage(data.message);
        }
      });
  }

  const addFields = () => {
    if (formFields.length <= 4) {
      let object = {
        name: "",
        mobile: "",
      };

      setFormFields([...formFields, object]);
    }
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <>
      <div className="text-center booktickets container-fluid fontloader">
        <div>
          <b>BOOK TICKETS</b>
        </div>

        <div className="container book-details">
          <div>
            <div className="col">{ticket.name}</div>
            <div style={{ marginRight: "50px" }} className="col">
              ₹{ticket.price}
            </div>
            <br />

            <details>
              <summary>View Details</summary>
              <center>
                <p>Details :-</p>

                <p>
                  <img
                    src="./basic_pass.png"
                    alt="viewdetails"
                    style={{
                      width: "40px",
                      marginTop: "7px",
                    }}
                  />
                  Early Bird Ticket: Sneaker and Streetwear Fest: Day 1 Tickets
                </p>
                <div style={{ marginRight: "66px" }}>
                  <p>
                    <img
                      src="./basic_pass.png"
                      alt="viewdetails"
                      style={{
                        width: "40px",
                        marginTop: "7px",
                      }}
                    />
                    Ticket price for Select/Select mini members @Rs.1
                  </p>
                </div>

                <div style={{ marginRight: "125px" }}>
                  <p>
                    <img
                      src="./basic_pass.png"
                      alt="viewdetails"
                      style={{
                        width: "40px",
                        marginTop: "7px",
                      }}
                    />
                    Flat Rs.100 off for all Platinum Members.
                  </p>
                </div>
              </center>
            </details>
          </div>

          <div>
            <div
              className="col-12 fontloader"
              style={{
                color: "#ee7e1a",
                marginLeft: "20px",
                marginRight: "70px",
              }}
            >
              <img onClick={removeFields} src="./minus.png" alt="minus" />
              &nbsp; <b>ADD</b> &nbsp;
              <img onClick={addFields} src="./plus.png" alt="plus" />
            </div>
          </div>
        </div>
        <br />

        <Container className="book-details">
          <div onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div className="input-group" key={index}>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.name}
                  />
                  &nbsp;&nbsp;
                  <input
                    type="phoneno"
                    className="form-control"
                    name="mobile"
                    placeholder="Contact Number"
                    id="exampleInputphoneno"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.mobile}
                  />
                  &nbsp;&nbsp;
                </div>
              );
            })}

            {error && (
              <div
                style={{
                  color: "#ee1a1a",
                  marginTop: "20px",
                }}
              >
                <p>{errorMsg}</p>
              </div>
            )}
          </div>
        </Container>
       
       <Link
          onClick={submit}
          style={{ textDecoration: "none" }}
          className="bookticket_submit fontloader"
        >
          SUBMIT DETAILS
        </Link>

      </div>
    </>
  );
}

export default BookTickets;
