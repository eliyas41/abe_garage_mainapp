import React from 'react'

const Appointment = () => {
  return (
    // CTA Section
    <section style={{ marginTop: "-100px" }} className="cta-section">
      <div className="auto-container">
        <div className="wrapper-box">
          <div className="left-column">
            <h3>Schedule Your Appointment Today</h3>
            <div className="text">Your Automotive Repair & Maintenance Service Specialist</div>
          </div>
          <div className="right-column">
            <div className="phone">1800-456-7890</div>
            <div className="btn"><a href="#" className="theme-btn btn-style-one"><span>Appointment</span><i
              className="flaticon-right"></i></a></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment