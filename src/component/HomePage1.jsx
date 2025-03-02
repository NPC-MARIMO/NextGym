import React from 'react'
import Nav from './Nav'
import './Home-page1.css'
import SusBrowseButtons from './SusBrowseButtons'

export default function HomePage1() {
  return (
    <>
    <div className="page1">
        <Nav/>

        <div className="content">
        <h1>
        The gym for high impact athletes
        </h1>
        <h3>Fitness is not about being better than someone else. It’s about being better than you used to be.</h3>

        <SusBrowseButtons color="#fff"  />
        
        </div>


    </div>
      
        
    </>
  )
}
