import React from "react"
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import { SEO, FluidImage, Btn, Banner } from "../components/Complete"

const Home = (props) => {
  return(
  <Layout>
    <SEO title="Skincare By Hilary" />
    <PageWrapper>
      <Banner title="Skincare By Hilary">
        <p className="p-title">Looking your best makes you feel better</p>
      </Banner>
      <div className="flex-container">
        <div className="flex-item first">
        <FluidImage maxWidth="500px" fluid={props.data.file.childImageSharp.fluid}/>
          <h2>Learn More<span className="underline"/></h2>
          <ul>
          <li className="link"> <Link to="/facials-peels">Facials & Peels</Link> </li>
          <li className="link"> <Link to="/wax-and-lash">Waxing & Lashes</Link> </li>
          <li className="link"> <Link to="/makeup">Makeup</Link> </li>
          </ul>
        </div>
        <div className="flex-item">
          <h2>About Hilary<span className="underline"/></h2>
          <p>Hilary offers a clinical approach to working magic on your skin.</p>
          <p>Her experience as an esthetician spans well over a decade.</p>
          <p>Having worked in both plastic surgery and dermatology she is able to offer you a thorough skin analysis, as well as a broad range of treatment options, perfectly suited to your needs. </p>
          <p>This, combined with her nurturing and intuitive touch, allows her to provide facial treatments that will bring new life to your skin!</p>
         <Btn className="container-btn" to="/schedule" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)" hoverColor="var(--primaryColor)" hoverBackground="var(--primaryDark)" />
        </div>
      </div>
    </PageWrapper>
  </Layout>
  )
}

const PageWrapper = styled.section`
  & {
    .p-title{
      text-transform: capitalize;
      font-size: 1.2rem;
      letter-spacing: var(--altSpacing);
    }
    .flex-container{
      align-items: center;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;
      width: 100%;
    }
    h2{
      text-align: center;
      margin: 0 auto 0.5rem;
      width: 100%;
      .underline{
        background: var(--primaryColor);
        display:block;
        height: 3px;
        margin: 0 auto;
        margin-top: 0.25rem;
        width: 25%;
      }
    }
    .fluid-img,
    .flex-item{
      margin: 1rem auto;
      box-sizing: border-box;
      width: 100%;
      max-width: 500px;
    }
    .first{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .first > .fluid-img{
      width: 100%;
    }
    .first  ul,
    .first  ul li{
      margin: unset;
      padding: unset;
    }
    .first ul li a{
      display: block;
      font-size: 0.9rem;
      margin: 0.5rem;
      padding: 0.1rem 1rem;
      white-space: none;
    }
    .first ul li a:hover{
      background: var(--primaryColor);
      border-radius: 0.4rem;
      color: var(--white);
    }
    @media(min-width: 768px ){
      .flex-container{
        flex-direction: row;
      }
      .fluid-img,
      .flex-item{
        box-sizing: border-box;
        width: 45%;
      }
    }
  }
`
export const query = graphql`
  {
    allAirtable {
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
    file(relativePath: { eq: "default-image.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Home
