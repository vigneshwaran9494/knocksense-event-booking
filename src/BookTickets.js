import React from 'react'
import { BsPlusCircle, BsCaretDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";

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
              View Details <BsCaretDown />
            </div>
          </div>
          <div>
            <div className="col-12 fontloader" style={{ color: "#ee7e1a", marginLeft: "40px" }}>
              <BsPlusCircle /> <b>ADD</b>
            </div>
          </div>
        </div>
        <NavLink exact to="/checkout" className='bookticket_submit fontloader'>SUBMIT DETAILS</NavLink>
      </div>
    </>
  )
}

export default BookTickets;