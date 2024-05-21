import React from 'react'
import "./Navbar.css"
import Image1 from '../images/first-bg-image.png'
import Image2 from '../images/gaddi.png'

const Navbar = () => {
  return (
    <div className="header">
  <div className="img">
    <img src={Image1} alt="" />
  </div>
  <div className="logo">
    <div className="logoname">
      <span id="white-heading">Cab</span>
      <span id="yellow-heading">HUB</span>
      <p>CALL AND RELAX</p>
    </div>
    <nav className="navbar">
      <a href="#home_page" id="home">Home</a>
      <a href="#about_us">About</a>
      <a href="#features">Features</a>
      <a href="#blog">Blog</a>
      <a href="#book_now">Book Now</a>
      <a href="#contact_us">Contacts</a>
    </nav>
  </div>
  <div className="centre-image" id="home_page">
    <div className="text">
      <h1 id="yellow-heading">Book Cab Now</h1>
      <h1 id="white-heading">+123 4567 8900</h1>
      <h2 id="white-headings" className="small-text">
        WWW.PSDFREEBIES.COM
      </h2>
    </div>
    <div className="image">
      <img src={Image2} alt="" />
    </div>
  </div>
</div>

  )
}

export default Navbar
