import React from 'react'
import './Slide4.css' 
import Image1 from '../images/body-3.png'
import Image2 from '../images/Ellipse.png'
import Image3 from '../images/black-star.png'
import Image4 from '../images/fast-booking.png'
import Image5 from '../images/bonuses.png'
import Image6 from '../images/black-settings.png'

const Slide4 = () => {
  return (
    <div className="body-3" id="features">
  <div className="img">
    <img src={Image1} alt="" />
  </div>
  <div className="body-3-heading">
    <h1 id="yellow-heading">WE DO BEST</h1>
    <h1 id="white-heading">THAN YOU WISH</h1>
  </div>
  <div className="grid-container">
    <div className="grid">
      <div className="grid-image">
        <img src={Image2} id="elipse-1" />
        <img src={Image3} id="black-star" />
      </div>
      <div className="grid-text">
        <h2 id="yellow-text">HOME PICKUP</h2>
        <p id="white-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam
          laudantium praesentium quaerat culpa aut
        </p>
      </div>
    </div>
    <div className="grid">
      <div className="grid-image">
        <img src={Image2} id="elipse-1" />
        <img src={Image4} id="fast-booking" />
      </div>
      <div className="grid-text">
        <h2 id="yellow-text">FAST BOOKINGS</h2>
        <p id="white-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam
          laudantium praesentium quaerat culpa aut
        </p>
      </div>
    </div>
    <div className="grid">
      <div className="grid-image">
        <img src={Image2} id="elipse-1" />
        <img src={Image5} id="bonuses" />
      </div>
      <div className="grid-text">
        <h2 id="yellow-text">BONUSES FOR RIDE</h2>
        <p id="white-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam
          laudantium praesentium quaerat culpa aut
        </p>
      </div>
    </div>
    <div className="grid">
      <div className="grid-image">
        <img src={Image2} id="elipse-1" />
        <img src={Image6} id="black-settings" />
      </div>
      <div className="grid-text">
        <h2 id="yellow-text">GPS SEARCHING</h2>
        <p id="white-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam
          laudantium praesentium quaerat culpa aut
        </p>
      </div>
    </div>
  </div>
  <div className="button">
    <div id="read-more-2">READ MORE</div>
  </div>
</div>

  )
}

export default Slide4
