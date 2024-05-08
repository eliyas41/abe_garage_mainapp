import React from 'react'
import RoutingPageBanner from '../components/RoutingPageBanner/RoutingPageBanner'
import FeatureService from '../components/FeatureService/FeatureService'
import AdditionalService from '../components/AdditionalService/AdditionalService'

const Services = () => {
  return (
    <>
      <RoutingPageBanner title="Our Services" />
      <FeatureService />
      <div style={{ marginTop: "-50px" }}><AdditionalService /></div>
    </>
  )
}

export default Services