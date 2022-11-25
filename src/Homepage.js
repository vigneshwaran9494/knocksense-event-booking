import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import { BsFillGeoAltFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import BookTickets from "./BookTickets";

function Homepage() {
  const { eventId } = useParams();

  useEffect(() => {
    callGetEventDetails();
  }, []);

  const [loading, setLoader] = useState(false);
  const [event, setEvent] = useState({});
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  /**
   * get event details
   */
  async function callGetEventDetails() {
    //set loader
    setLoader(true);
    fetch(
      `https://knocksense-prod.cartoonmango.com/api/v1/event/detail/${eventId}`
    )
      .then((res) => res.json())
      .then((response) => {
        if (!response.error) {
          setEvent(response.data);
          setLoader(false);
        }
      });
  }

  return (
    <>
      <Header />
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <img
            src={event.cover_image}
            className="image-fluid"
            width="100%"
            alt="Responsive_image"
          />
          <div style={{ textAlign: "center" }}>
            <br />
            <button type="button" className="btn festbutton">
              {event.category ? event.category.name : ""}
            </button>
            <h1>{event.name}</h1>
            <h6>
              <BsFillCalendarCheckFill />{" "}
              {`${moment(event.date).format("DD MMM YYYY")} at ${moment(
                event.start_time
              ).format("hh:mm A")} `}
            </h6>
            <h6>
              <BsFillGeoAltFill /> {event.location}
            </h6>
          </div>
          <h6>
            <Card>
              <div className="container">
                {(event.gallary_image || [])
                  .slice(0, 7)
                  .map((imageItem, _index) => (
                    <Card.Img className="image-container" src={imageItem.url} />
                  ))}
              </div>
              <p style={{ lineHeight: "25px" }}>{event.description}</p>
              <Card.Body>
                <center>
                  <NavLink
                    exact
                    to="/BookTickets"
                    type="button"
                    className="btn .text-center"
                    style={{ backgroundColor: "#ee7e1a" }}
                  >
                    Book your Tickets & Download the knocksense App to get your
                    tickets
                  </NavLink>
                </center>
              </Card.Body>
            </Card>
          </h6>
          <Footer
            onBuyNowPressed={() => {
              setBottomSheetOpen(true);
            }}
            price={event.ticket ? event.ticket[0].price : 0}
          />

          <BottomSheet
            onDismiss={() => setBottomSheetOpen(false)}
            open={bottomSheetOpen}
          >
            <BookTickets />
          </BottomSheet>
        </>
      )}
    </>
  );
}
export default Homepage;
