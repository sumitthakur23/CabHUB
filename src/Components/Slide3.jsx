import React from 'react'
import './Slide3.css'
import Image1 from '../images/teen-gaddiya.png'

const data=[
  {heading:"ECONOMY CLASS"},
  {heading:"STANDARD CLASS"},
  {heading:"BUSINESS CLASS"}
]
const Slide3 = () => {
  return (
    <div className="body-2" id="about_us">
    <div className="body-2-heading">
      <h1 id="yellow-heading">OUR</h1>
      <h1 id="black-heading">TARIFFS</h1>
    </div>
    <div className="containers">
      {data.map((elem)=>(
        <div className="items">
        <img src={Image1} alt="" />
        <h2>{elem.heading}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          provident quaerat vitae tempora qui. Laborum nobis dignissimos labore a
          distinctio.
        </p>
        <h6>$1.5 M/I</h6>
        <div id="read-more">READ MORE</div>
      </div>
      ))}
      
      
      </div>
  </div>
  
  )
}

export default Slide3
