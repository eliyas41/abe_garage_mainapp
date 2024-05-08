import React from 'react'
import videoImg from "../../../assets/images/home_imges/video.png"

const RoutingPageBanner = ({ title }) => {
  return (
    <section className="page-title" style={{ backgroundImage: `url(${videoImg}`, backgroundRepeat: "no-repeat", height: "100px" }}>
      <div style={{ marginTop: "-40px", marginLeft: "200px" }} className="auto-container">
        <h2 style={{ fontSize: "25px", marginBottom: "20px" }}>{title}</h2>
        <ul className="page-breadcrumb">
          <li style={{ fontSize: "20px" }}><a href="/">home</a></li>
          <li style={{ fontSize: "20px" }}>{title}</li>
        </ul>
      </div>
    </section>
  )
}

export default RoutingPageBanner