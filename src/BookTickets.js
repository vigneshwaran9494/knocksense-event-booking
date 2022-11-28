import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Configuration } from "./Config";

function BookTickets({ eventDetails, onSubmitPressed }) {
  const ticket = eventDetails.ticket[0];

  const [formFields, setFormFields] = useState([{ name: "", mobile: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
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
          <b>BOOK TICKETS</b>{" "}
        </div>

        <div className="container book-details">
          <div>
            <div className="col">{ticket.name}</div>
            <div className="col-4">₹{ticket.price} </div>
            <br />
            <div className="col-7">
              <DropdownButton title="View Details" variant="secondary">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div>
            <div
              className="col-12 fontloader"
              style={{ color: "#ee7e1a", marginLeft: "40px" }}
            >
              <img onClick={removeFields} src="./minus.png" alt="minus" />{" "}
              &nbsp; <b>ADD</b> &nbsp;
              <img onClick={addFields} src="./plus.png" alt="plus" />
            </div>
          </div>
        </div>
        <br />

        <Container className="book-details">
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <input
                    name="name"
                    placeholder="Name"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.name}
                  />
                  <input
                    name="mobile"
                    placeholder="Contact number"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.age}
                  />
                </div>
              );
            })}
          </form>
          {/* <Row>
            <Col>
              <InputGroup className="mb-6">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputphoneno"
                  name="phoneno"
                  placeholder="Name"
                />
              </InputGroup>
            </Col>

            <Col>
              <InputGroup className="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputphoneno"
                  name="phoneno"
                  placeholder="Contact Number"
                />
              </InputGroup>
            </Col>
          </Row> */}
        </Container>

        <Button onClick={submit}>SUBMIT DETAILS</Button>
      </div>
    </>
  );
}

export default BookTickets;
