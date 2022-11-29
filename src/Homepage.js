import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import { BsFillGeoAltFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { Configuration } from "./Config";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import BookTickets from "./BookTickets";
import Checkout from "./Checkout";
import Thankyoupage from "./Thankyoupage";

function Homepage() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [formFields, setFormFields] = useState([{ name: "", phoneNo: "" }]);

  useEffect(() => {
    callGetEventDetails();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = `${Configuration.PAYTM_HOST}merchantpgpui/checkoutjs/merchants/${Configuration.PAYTM_MID}.js`;
    script.type = "application/javascript";
    script.crossOrigin = "anonymous";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [loading, setLoader] = useState(false);
  const [event, setEvent] = useState({});

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [checkoutSheetOpen, setCheckoutSheetOpen] = useState(false);

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [ticketDetails, setTicketDetails] = useState({});

  const onTicketInfoSubmit = (ticketData) => {
    setTicketDetails(ticketData);
    setBottomSheetOpen(false);
    setCheckoutSheetOpen(true);
  };

  /**
   * get event details
   */
  async function callGetEventDetails() {
    //set loader
    setLoader(true);
    fetch(`${Configuration.BASE_URL}event/detail/${eventId}`)
      .then((res) => res.json())
      .then((response) => {
        if (!response.error) {
          setEvent(response.data);
          setLoader(false);
        }
      });
  }

  const proceedPaytmPayment = (paymentData) => {
    setCheckoutSheetOpen(false);

    var config = {
      root: "",
      style: {
        bodyBackgroundColor: "#fafafb",
        bodyColor: "",
        themeBackgroundColor: "#0FB8C9",
        themeColor: "#ffffff",
        headerBackgroundColor: "#284055",
        headerColor: "#ffffff",
        errorColor: "",
        successColor: "",
        card: {
          padding: "",
          backgroundColor: "",
        },
      },
      data: {
        orderId: paymentData.order_id,
        token: paymentData.txnToken,
        tokenType: "TXN_TOKEN",
        amount: paymentData.amount /* update amount */,
      },
      payMode: {
        labels: {},
        filter: {
          exclude: [],
        },
        order: ["CARD", "NB", "UPI"],
      },
      flow: "DEFAULT",
      merchant: {
        mid: paymentData.mid,
        redirect: false,
      },
      handler: {
        transactionStatus: function transactionStatus(paymentStatus) {
          console.log("paymentStatus => ", paymentStatus);
          if (Configuration.IS_STAGING) {
            navigate(`/Thankyoupage/${event.id}`);
            window.location.reload(false);
            //setPaymentSuccess(true);
          } else {
            verifyPayment(paymentData.ping_url);
          }
        },
        notifyMerchant: function notifyMerchant(eventName, data) {
          console.log("notify => ", data);
        },
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      // initialze configuration using init method
      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          console.log("Before JS Checkout invoke");
          // after successfully update configuration invoke checkoutjs
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.log("Error => ", error);
        });
    }
  };

  async function verifyPayment(pingUrl) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth-token"),
      },
    };

    fetch(pingUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          console.log("verifyPayment", data);
          if (data && data.data) {
            navigate(`/Thankyoupage/${event.id}`);
            window.location.reload(false);
          }
        } else {
          setTimeout(() => {
            verifyPayment(pingUrl);
          }, 1000);
        }
      });
  }

  function NewlineText(props) {
    const text = props.text;
    return text.split("\n").map((str) => <p>{str}</p>);
  }

  const HomePageComponent = () => {
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
              <div className="festContainer">
                <div className="festbutton">
                  {event.category ? event.category.name.toUpperCase() : ""}
                </div>
              </div>

              <h1 className="event-title">{event.name}</h1>
              <div>
                <h6 className="fontFamily">
                  <BsFillCalendarCheckFill />{" "}
                  {`${moment(event.date).format("DD MMM YYYY")} at ${moment(
                    event.start_time
                  ).format("hh:mm A")} `}
                </h6>

                <h6 className="fontFamily">
                  <BsFillGeoAltFill /> {event.location}
                </h6>
              </div>
              <h6>
                <Card>
                  <div className="container">
                    {(event.gallary_image || [])
                      .slice(0, 7)
                      .map((imageItem, _index) => (
                        <Card.Img
                          className="image-container"
                          src={imageItem.url}
                        />
                      ))}
                  </div>
                  <div className="event-description">
                    <NewlineText
                      text={event.description ? event.description : ""}
                    />
                  </div>
                  <Card.Body>
                    <center>
                      <NavLink
                        exact
                        // to="/BookTickets"
                        type="button"
                        className="btn .text-center"
                        style={{ backgroundColor: "#ee7e1a" }}
                      >
                        Book your Tickets & Download the knocksense App to get
                        your tickets
                      </NavLink>
                    </center>
                  </Card.Body>
                </Card>
              </h6>
            </div>
            <Footer
              onBuyNowPressed={() => {
                setBottomSheetOpen(true);
              }}
              price={event.ticket ? event.ticket[0].price : 0}
            />

            <BottomSheet open={bottomSheetOpen}>
              <BookTickets
                eventDetails={event}
                onSubmitPressed={onTicketInfoSubmit}
              />
            </BottomSheet>

            <BottomSheet
              onDismiss={() => setCheckoutSheetOpen(false)}
              open={checkoutSheetOpen}
            >
              <Checkout
                eventDetails={event}
                ticketDetails={ticketDetails}
                proceedPaytmPayment={proceedPaytmPayment}
              />
            </BottomSheet>
          </>
        )}
      </>
    );
  };

  return paymentSuccess ? (
    <Thankyoupage eventDetails={event} />
  ) : (
    <HomePageComponent />
  );
}
export default Homepage;
