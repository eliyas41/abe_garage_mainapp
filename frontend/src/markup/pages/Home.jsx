import React from 'react'
import BottomBanner from '../components/BottomBanner/BottomBanner'
import AboutUs from '../components/AboutUs/AboutUs'
import FeatureService from '../components/FeatureService/FeatureService'
import QualityService from '../components/QualityService/QualityService'
import AdditionalService from '../components/AdditionalService/AdditionalService'
import AboutVideo from '../components/AboutVideo/AboutVideo'

const Home = () => {
  return (
    <>
      <BottomBanner />
      <AboutUs />
      <FeatureService />
      <QualityService />
      <AdditionalService />
      <AboutVideo />
    </>
  )
}

export default Home