import React from 'react'
import "./Classes.css"
export default function Classes() {
  return (
    <div>
      <div className="classes">
        <div className="top">
          <h1>Disvover All Our Classes</h1>
          <div className="arrows">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <div className="cardContainer"></div>
        <button>Browse All Classes</button>
      </div>
    </div>
  )
}
