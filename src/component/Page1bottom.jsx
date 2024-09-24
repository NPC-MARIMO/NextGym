import React from 'react'
import './Page1-bottom.css'
export default function Page1bottom() {
  return (
    <>

      <div className="p1bottom">
        <div className="bottombox">
          <div className="img"></div>
          <div className="text">
            <div className="one"><h2>CONTACT</h2></div>
            <div className="two">
              <h3>contact@gymfit.com</h3>
              <h3>(323) 238 - 0638</h3>
            </div>
          </div>
        </div>
        <div className="bottombox">
        <div className="img"></div>
        <div className="text">
          <div className="one"><h2>OPEN HOURS</h2></div>
          <div className="two">
            <div className="twoone">
              <h3>Monday - Friday</h3>
              <h3>Saturday</h3>
              <h3>Sunday</h3>
            </div>
            <div className="twotwo">
              <h3>7:00AM - 10:00PM</h3>
              <h3>7:00AM - 10:00PM</h3>
              <h3>7:00AM - 10:00PM</h3>
            </div>
          </div>
        </div>
        </div>
        <div className="bottombox">
        <div className="img"></div>
        <div className="text">
          <div className="one"><h2>LOCATION</h2></div>
          <div className="two">
            <h3>6736 S Sherbourne Dr Los Angeles, 90056</h3>
          </div>
        </div>
        </div>
      </div>
      
    </>
  )
}
