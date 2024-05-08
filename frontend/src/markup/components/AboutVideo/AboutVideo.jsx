import React from 'react'
import video from "../../../assets/images/home_imges/video.png"

const AboutVideo = () => {
  return (
    //  Video Section
    <section className="video-section">
      <div data-parallax='{"y": 50}' className="sec-bg"
        style={{ backgroundImage: `url(${video})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "430px" }}></div>
      <div style={{ marginTop: "-80px", marginLeft: "150px" }} className="auto-container">
        <h5>Working since 1992</h5>
        <h2>We are leader <br /> in Car Mechanical Work</h2>
        <div className="video-box">
          <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
            className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play"></i></a>
          </div>
          <div className="text">Watch intro video <br /> about us</div>
        </div>
      </div>
    </section>
  )
}

export default AboutVideo;