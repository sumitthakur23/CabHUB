import React from 'react'
import './Slide5.css' 
import Image1 from '../images/Layer 1.png'
import Image2 from '../images/Layer 2.png'
import Image3 from '../images/phone.png'

const Slide5 = () => {
  return (
    <div className="body-4">
  <div className="body-4-heading">
    <h1 id="yellow-heading">DOWNLOAD</h1>
    <h1 id="black-heading">BEST CAB SERVICES</h1>
  </div>
  <div className="flex-box">
    <div className="body-4-text-box">
      <div className="heading-box">
        <h2>Download the Cab Voucher app free!</h2>
        <h2>Get Exciting new Offers.</h2>
      </div>
      <div className="desc">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
          voluptatum sunt, sit doloribus consectetur magni earum non voluptatem
        </p>
      </div>
      <div className="layers">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
      </div>
    </div>
    <div className="body-4-image">
      <img src={Image3} alt="" />
    </div>
  </div>
</div>

  )
}

export default Slide5
