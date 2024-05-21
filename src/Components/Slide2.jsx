import React from 'react'
import "./Slide2.css"

const Slide2 = () => {
  return (
    <div className="body-1" id="book_now">
  <div className="text-box">
    <h2>BEST IN CITY</h2>
    <h1>TRUSTED CAB SERVICES IN NEW YORK</h1>
    <br />
    <p>
      Quae voluptatem dignissimos totam placeat, rerum dolor repellendus
      rem aliquam porro sit, mollitia cumque delectus in? Beatae officia error
      molestias. Sequi minima accusantium, harum vel incidunt consequatur
      cumque. Porro vel, voluptatem perferendis quidem ab incidunt doloremque
      unde dolores neque ad, recusandae animi quia vitae inventore tempore
      itaque quaerat eum ullam officia natus commodi. Dignissimos, deserunt
      libero?
    </p>
    <br />
    <div id="read-more">READ MORE</div>
  </div>
  <div className="form-box">
    <form action="" className="form">
      <div className="form-heading">
        <span id="white-heading">BOOK A </span>
        <span id="yellow-heading">CAB</span>
      </div>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Phone no." />
      <input type="text" placeholder="When" />
      <input type="text" placeholder="Time" />
      <input type="text" placeholder="Start" />
      <input type="text" placeholder="End" />
      <select name="" id="">
        <option value="">Car</option>
        <option value="">Mini Bus</option>
      </select>
      <input type="button" defaultValue="SUBMIT" id="button" />
    </form>
  </div>
</div>

  )
}

export default Slide2
