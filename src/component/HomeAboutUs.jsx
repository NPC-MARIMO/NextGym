import React from 'react'
import './HomeAboutUs.css'
import SusBrowseButtons from './SusBrowseButtons'
import './SusBrowseButtons.css'

export default function HomeAboutUs() {
  return (
    <>
      <div className="aboutUs">
        <h1 className='bgText' >ABOUT US</h1>
          <h1 className='notme' >We are not just a gym, we are a whole community</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sagittis, diam netus vel eget scelerisque nibh justo, vestibulum. Velit senectus.</p>
          <SusBrowseButtons color = "#000 "/> 
          <div className="images">
            <img src="https://assets.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf888328200a_image-1-home-community-gym-x-template-p-1080.jpeg" alt="" />
            <img src="https://assets.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf07a8282005_image-2-home-community-gym-x-template-p-1080.jpeg" alt="" />
          </div>
        
      </div>
    </>
  )
}
