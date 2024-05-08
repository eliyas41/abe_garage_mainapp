import React from 'react'
import BottomBanner from '../components/BottomBanner/BottomBanner'
import AboutUs from '../components/AboutUs/AboutUs'
import FeatureService from '../components/FeatureService/FeatureService'
import QualityService from '../components/QualityService/QualityService'

const Home = () => {
  return (
    <>
      <BottomBanner />
      <AboutUs />
      <FeatureService />
      <QualityService />
    </>
  )
}

export default Home