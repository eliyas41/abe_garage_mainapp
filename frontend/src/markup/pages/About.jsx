import React from 'react'
import videoImg from "../../assets/images/home_imges/video.png"
import carWheel from "../../assets/images/home_imges/10df06f8-6b02-4e4d-9331-521251fa3ace.png"
import AdditionalService from '../components/AdditionalService/AdditionalService'
import AboutVideo from '../components/AboutVideo/AboutVideo'
import Appointment from '../components/Appointment/Appointment'

// Import components
import AboutUs from '../components/AboutUs/AboutUs'

const About = () => {
  return (
    <>
      <section className="page-title" style={{ backgroundImage: `url(${videoImg}`, backgroundRepeat: "no-repeat", height: "100px" }}>
        <div style={{ marginTop: "-40px", marginLeft: "200px" }} className="auto-container">
          <h2 style={{ fontSize: "25px", marginBottom: "20px" }}>About us</h2>
          <ul className="page-breadcrumb">
            <li style={{ fontSize: "20px" }}><a href="/">home</a></li>
            <li style={{ fontSize: "20px" }}>About us</li>
          </ul>
        </div>
      </section>

      {/* About Section Three */}
      <section style={{ marginTop: "-50px" }} class="about-section-three">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-7">
              <div class="content">
                <h2 style={{ fontSize: "20px" }}>We are highly skilled mechanics for your car repair</h2>
                <div class="text">
                  <small style={{ fontSize: "17px" }}><p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information heading towards a streamlined cloud solution. User generated content in real-time will have multiple.</p></small>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="image"><img style={{ height: "370px" }} src={carWheel} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "-150px" }}><AboutUs /></section>
      <section style={{ marginTop: "-150px" }}><AdditionalService /></section>
      <section><AboutVideo /></section>
      <section><Appointment /></section>
    </>
  )
}

export default About