import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Btn, FluidImage, ServiceItems } from "../components/Complete"

const FacialsPeels = (props) => {
  return(
    <Layout title="Facials & Peels"> 
    <SEO title={`Facials & Peels with clinical Estheticians in Napa, CA | ${props.data.site.siteMetadata.title}`} image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about skin rejuvenation procedures performed by Hilary Molloy. Hilary serves Napa, CA and surrounding areas."
    />
    <PageWrapper>
        <FluidImage fluid={props.data.seoImg.childImageSharp.fluid} maxWidth="1000px"/>
      <p className="click-to-schedule">Click on a facial service below to get an appointment now.</p>

      <section className="menu-box">
        <ServiceItems items={props.data.fp} category="Facials & Peels" />
        <ServiceItems items={props.data.extras} category="Extras" mini
        className="extras"/>
      </section>
      <p className="click-to-schedule">Click on a facial service above to get an appointment now.</p>
      <Btn className="btn" to="/schedule" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)"/>
      <Btn className="btn" to="/wax-and-lash"  text="Waxing & Lashes Menu" backgroundColor="var(--grey)" color="var(--black)"/>
      <Btn className="btn" to="/makeup"  text="Makeup Menu" backgroundColor="var(--grey)" color="var(--black)"/>

    </PageWrapper>
  </Layout>
  )
}

export const query = graphql`
  {
    fp:allAirtable(filter: {data: {category: {eq: "facials-peels"}}}, sort: {fields: data___name}) {
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
    extras:allAirtable(filter: {data: {category: {eq: "extras"}}}, sort: {fields: data___name}) {
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

    seoImg:file(relativePath: { eq: "super-skin/super-skin-spa-facial.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

const PageWrapper = styled.section`
  .menu-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
  @media(min-width:768px){ .menu-box{ >:nth-child(1){ max-width: 60%; } } }
`
export default FacialsPeels
