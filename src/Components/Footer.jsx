import React from 'react'
import './Footer.css'
import Image1 from '../images/about-cab.png'
import Image2 from '../images/download.png'
import Image3 from '../images/contact.png'

const Footer = () => {
  return (
    <>
  <div className="body-7">
    <div className="flexs">
      <div className="flex-items">
        <div className="body-6-heading">
          <h2 id="white-heading">ABOUT CAB HUB</h2>
        </div>
        <div className="yellow-div"></div>
        <div className="body-6-desc">
          <p id="white-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            commodi quas, repellendus id corrupti magnam quod tempora mollitia
            eligendi cupiditate est minus cumque sed aliquam ab, sit nemo soluta
            sunt culpa officia. Odio maiores, ea id atque praesentium aspernatur
            mollitia.
          </p>
        </div>
        <div className="body-6-img">
          <img src={Image1} alt="" />
        </div>
      </div>
      <div className="flex-items">
        <div className="body-6-heading">
          <h2 id="white-heading">DOWNLOAD</h2>
        </div>
        <div className="yellow-div"></div>
        <div className="body-6-desc">
          <p id="white-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            commodi quas, repellendus
          </p>
        </div>
        <div className="body-6-text-img">
          <div className="download-text">
            <p id="yellow-text">ANDROID USERS</p>
            <p id="yellow-text">IOS USERS</p>
          </div>
          <div className="download-img">
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-items">
        <div className="body-6-heading">
          <h2 id="white-heading">CONTACT</h2>
        </div>
        <div className="yellow-div"></div>
        <div className="body-6-contact-img">
          <div className="contact-img">
            <img src={Image3} alt="" />
          </div>
          <div className="contact-text">
            <p id="white-text">
              +123, Main Street,Your City, New York, USA 789456
            </p>
            <p id="white-text">+123 4567 8900</p>
            <p id="white-text">free@psdfreebies.com</p>
            <p id="white-text">www.psdfreebies.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <footer id="white-text">Copyright © 2024 PSDfreebies.com</footer>
  </div>
</>

  )
}

export default Footer
