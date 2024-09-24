import React, { Component } from 'react'
import './SusBrowseButtons.css'
export default function SusBrowseButtons(props){
    return (
      <div>
        <div className="buttons">
            <div className="button"><h2>Subscribe Now</h2>
            </div>
            <div className="button" style={{border :`2px solid ${props.color}`}}><h2>Browse Classes</h2></div>
        </div>
      </div>
    )
  
}

