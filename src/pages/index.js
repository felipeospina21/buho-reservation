import React from "react"
import SEO from "../components/seo"
import HowItWorks from "../components/HowItWorks"
import About from "../components/About"
import OtherServices from "../components/OtherServices"
import ImgCarousel from "../components/ImgCarousel"
import GoogleMap from "../components/GoogleMap"
import Hero from "../components/Hero"

// import '@ptkdev/webcomponent-instagram-widget';

const IndexPage = () => {
  return (
    <>
      <SEO title="Inicio" />
      <Hero
        text="Búho"
        src="panoramica_auto.jpg"
        alt="Imagen panorámica de restaurante búho"
      />
      <About />
      <HowItWorks />
      <ImgCarousel />
      <OtherServices />
      <GoogleMap />

      {/* <instagram-widget username="@buhoentrepinos" items-limit={6} grid="responsive"></instagram-widget> */}
    </>
  )
}

export default IndexPage
