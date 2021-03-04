import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Btn, Banner, ServiceItems, FluidImage } from "../components/Complete"

const HairRemoval = (props) => {
  const {data:{hr}} = props
  const {data:{extras}} = props
  const {data:{lash}} = props
  return(
  <Layout>
    <SEO title="Waxing & Lash Extensions with Hilary in Napa, CA | Skincare By Hilary" image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about waxing & lash extension procedures performed by Hilary Molloy. Hilary serves Napa, CA and surrounding areas."/>
    <PageWrapper>

      <Banner title="Waxing & Lashes with Hilary"><FluidImage fluid={props.data.seoImg.childImageSharp.fluid} maxWidth="1000px"/></Banner>
      
      <p className="click-to-schedule">Click on any wax & lash service below to get an appointment now.</p>

      <section className="menu-box">
        <ServiceItems category="Waxing & Sprucing" items={hr} warning="*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users." mini warningWidth="250px"/>
        <ServiceItems category="Extras" items={extras} mini/>

        <ServiceItems category="Lashes" items={lash} warning="*Eyelash extensions are synthetic or natural fiber extensions that are individually adhered with a permanent medical-grade adhesive to your own natural lashes, to lengthen, thicken and volumize your look without appearing false or fake. Lash extensions usually last up to 3 weeks. They’re great for a special event or for long-term wear for those who’d prefer not to curl and coat their lashes with mascara on a daily basis. Biweekly touch-ups are recommended."  warningWidth="750px"/>
      </section>

      <p className="click-to-schedule">Click on any wax & lash service above to get an appointment now.</p>

      <Btn className="btn" to="/schedule" state={{name: "Waxing, Sprucing, & Shaping", time: "30 min", warning: "*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users."}} text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)"/>
      <Btn className="btn" to="/facials-peels"  text="Facials & Peels Menu" backgroundColor="var(--grey)" color="var(--black)"/>
      <Btn className="btn" to="/makeup"  text="Makeup Menu" backgroundColor="var(--grey)" color="var(--black)"/>
    </PageWrapper>
  </Layout>
  )
}

export const query = graphql`
  {
    hr: allAirtable(filter: {data: {category: {eq: "hair-removal"}}}, sort: {fields: data___name}) {
      nodes {
        data {
          name
          description
          price
          category
          time
          hasPriceRange
          priceRange
        }
      }
    }
    lash: allAirtable(filter: {data: {category: {eq: "eyelash-extensions"}}}, sort: {fields: data___name}) {
      nodes {
        data {
          name
          description
          price
          category
          time
          hasPriceRange
          priceRange
        }
      }
    }
    extras: allAirtable(filter: {data: {category: {eq: "extras"}}}, sort: {fields: data___name}) {
      nodes {
        data {
          name
          description
          price
          category
          time
          hasPriceRange
          priceRange
        }
      }
    }
    seoImg:file(relativePath: { eq: "skincare-by-hilary-app-lashes.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PageWrapper = styled.section`
    .menu-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .head-span{
      color: white;
      display: block;
      font-size: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      width: 100%;
    }
    .btn{
      display: block;
      margin: 1rem auto 2rem;
      width: fit-content;
    }
    .click-to-schedule {
      font-size: 0.9rem;
      font-style: italic;
      margin-top: 1rem;
      text-align: center;
    }
`
export default HairRemoval
