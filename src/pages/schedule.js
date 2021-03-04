import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, ContactForm, Banner, PhoneNumber } from "../components/Complete"

import styled from 'styled-components'

const Contact = (props) => {
  const child = <p style={{textAlign: 'left', fontSize: '0.9rem', width: `80%`}}>Call/text us at <PhoneNumber/>, or use the form below and someone will quickly get back to you.</p>
  return (
    <Layout title="Schedule An Appointment" bannerChildren={child}>
      <SEO
        title={`Schedule A Facial Rejuvenation Treatment With Hilary | ${props.data.site.siteMetadata.title}`}
        description="Schedule a facial rejuvenation treatment or spa treatment with a Licensed Esthetician in Napa, CA now."
        image={props.data.seoImg.childImageSharp.fluid.src}
      />
      <PageWrapper>
        <div className="flexible">
          <ContactForm treatment={props?.location?.state}/>
          <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736.7423901606335!2d-122.29071790416789!3d38.297500702478345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8084ffe7f8f2deef%3A0xd6629f3a3384c725!2sNapa%2C%20CA!5e0!3m2!1sen!2sus!4v1614895923565!5m2!1sen!2sus" width="600" height="450" style={{border: `0`}} allowfullscreen="" loading="lazy"></iframe>
        </div>
      </PageWrapper>
    </Layout>
  )
}


const PageWrapper = styled.section`
  & {
    margin: 0 auto;
    .flexible{
      display: flex;
      flex-wrap:wrap;
      align-items: flex-start;
      justify-content: center;
    }
  }
`

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "skincare-by-hilary-app-appointment.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    site{
      siteMetadata{
        title
      }
    }
  }
`

export default Contact
