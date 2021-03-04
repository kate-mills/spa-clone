import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, ContactForm, Banner, PhoneNumber } from "../components/Complete"

import styled from 'styled-components'

const Contact = (props) => {
  console.log(props)
  return (
    <Layout>
      <SEO
        title="Schedule A Facial Rejuvenation Treatment With Hilary | Skincare By Hilary"
        description="Schedule a facial rejuvenation treatment with Licensed Esthetician, Hilay Molloy in Napa, CA now."
        image={props.data.seoImg.childImageSharp.fluid.src}
      />
      <PageWrapper>
        <Banner title="Schedule An Appointment">
          <p className="form-instructions">Please call/text Hilary at <PhoneNumber/>, or use the form below and Hilary will get back to your as soon as she can.</p>
          <p className="form-instructions">Thank you!</p>
        </Banner>
        <div className="flexible">
          <ContactForm treatment={props?.location?.state}/>
          <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.9429823725263!2d-122.29631904885464!3d38.303988789207395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085065e23870405%3A0x5e6f6da1ff65ffae!2sParadigm%20Medical%20Aesthetics!5e0!3m2!1sen!2sus!4v1614735380577!5m2!1sen!2sus" width="600" height="450" style={{border:`0`}} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </PageWrapper>
    </Layout>
  )
}


const PageWrapper = styled.section`
  & {
    margin: 0 auto;
    .form-instructions{
      text-align: left;
      width: 75%;
    }
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
  }
`

export default Contact
