import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { BsFillShareFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { Configuration } from "./Config";
import { RWebShare } from "react-web-share";

function Thankyoupage({ eventDetail }) {
  const { eventId } = useParams();

  const [loading, setLoader] = useState(false);
  const [event, setEvent] = useState({});
  const [description, setDescription] = useState({});

  useEffect(() => {
    callGetEventDetails();
  }, []);

  /**
   * get event details
   */
  async function callGetEventDetails() {
    //set loader
    setLoader(true);
    fetch(`${Configuration.BASE_URL}event/detail/${eventId}`)
      .then((res) => res.json())
      .then((response) => {
        setLoader(false);
        if (!response.error) {
          setEvent(response.data);
          let descriptionShort = response.data.description.split("\n");
          setDescription(descriptionShort[0]);
        }
      });
  }

  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  };

  const DetectAndServe = () => {
    let os = getMobileOperatingSystem();
    if (os === "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.knocksense&pli=1";
    } else if (os === "iOS") {
      window.location.href =
        "https://apps.apple.com/in/app/knocksense-knockoff/id1539262930";
    } else {
      window.location.href = "https://www.knocksense.com/";
    }
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="fontloader">
          <Navbar className="container-row ">
            <img
              alt="knocksenselogo"
              src="/knocksenselogo.png"
              height="65px"
              className="col-3 mx-auto"
            />
          </Navbar>

          <div style={{ backgroundColor: "#1e9ab0" }}>
            <div className="checkoutbody fontloader">
              <h5>
                {" "}
                Booking Successful! <br />
                Download the knocksense App to view
                <br />
                your Ticket
              </h5>

              <button
                onClick={DetectAndServe}
                type="button"
                className="btn fontloader"
                style={{
                  backgroundColor: "#ee7e1a",
                  marginTop: "20px",
                  color: "white",
                }}
              >
                <b>DOWNLOAD NOW</b>
              </button>
            </div>

            <div className="container">
              <img
                src={event.cover_image}
                className="img-thumbnail imgthumbnai_new"
                alt="thankyouimage"
                style={{ border: "10px" }}
              />
            </div>
            <br />

            <div className="fontloader">
              <div className="container">
                <h6
                  className="checkout-titletext"
                  style={{ backgroundColor: "white", color: "#ee7e1a" }}
                >
                  I' am attending <b>{event.name}</b>
                </h6>
              </div>

              <div className="container">
                <h6
                  className="checkout-Areyou"
                  style={{ backgroundColor: "#ee7e1a", color: "white" }}
                >
                  <b>ARE YOU???</b>
                </h6>
              </div>

              <div className="container">
                {/* <h6 className="checkout-share"> */}
                {/* <b>SHARE</b> <BsFillShareFill /> */}
                <RWebShare
                  data={{
                    text: `${description}`,
                    url: `http://knocksense-event-booking-production.s3-website.ap-south-1.amazonaws.com/${event.id}`,
                    title: `${event.name}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button>Share ????</button>
                </RWebShare>
                {/* </h6> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Thankyoupage;
