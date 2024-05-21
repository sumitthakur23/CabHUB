import React from 'react'
import './Slide6.css'
import Image1 from '../images/body-5.png'
import Image2 from '../images/photo.png'

const Slide6 = () => {
  return (
    <div className="body-5" id="blog">
  <img src={Image1} alt="" />
  <div className="headings">
    <h1 id="yellow-heading">HAPPY CLIENT'S</h1>
    <h1 id="white-heading">TESTIMONIALS</h1>
  </div>
  <div className="flex">
    <div className="box-1">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        aspernatur{" "}
      </p>
      <div className="photo-text">
        <div className="photo-img">
          <img src={Image2} alt="" />
        </div>
        <div className="text-img">
          <h3 id="yellow-heading">JOHN DOE</h3>
          <h3 id="white-text">BUSINESS MAN</h3>
        </div>
      </div>
    </div>
    <div className="box-2">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        aspernatur{" "}
      </p>
      <div className="photo-text-1">
        <div className="photo-img">
          <img src={Image2} alt="" />
        </div>
        <div className="text-img-1">
          <h3 id="yellow-heading">JOHN DOE</h3>
          <h3 id="white-text">BUSINESS MAN</h3>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Slide6
