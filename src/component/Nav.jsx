import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <>
      <nav>
        <div className="left"></div>
        <div className="center">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Classes</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Pages {/* arrow icon */} </a></li>

            </ul>
        </div>
        <div className="right">
                <h3>Log-In</h3>
        </div>
      </nav>
    </>
  )
}
