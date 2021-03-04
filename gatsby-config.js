require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = `https://skincarebyhilary.app` // change to .com url
const netlifyUrl = `https://skincare-by-hilary.netlify.app`
const companyName = `Skincare By Hilary`
const description = `${companyName} - Schedule Now! Hilary's treatments include makeup, eyelash extensions, waxing, tinting, & facial spa treatments in Napa, CA.`

module.exports = {
  siteMetadata: {
    author: `kate-mills`,
    altUrl: `${netlifyUrl}`,
    dateModified: `${new Date().toISOString()}`,
    image: `/images/default-image.jpg`, // ./static/images/
    siteUrl: `${siteUrl}`,
    title: `${companyName}`,
    twitterUsername: `@gatsbyjs`,

    organization: {
      address: {
        name: `${companyName}`,
        street: `1812 Jefferson St.`,
        city: `Napa`,
        state: `CA`,
        zip: `94558`,
        country: `USA`,
      },
      description: `${description}`,
      email: `mailto:skincarebyhilary@gmail.com`,
      displayEmail: {
        prefix: `skincarebyhilary`,
        suffix: `@gmail`,
        ext: `.com`,
      },
      geo: {
        lat: 38.30418834186992,
        long: -122.29412004433584,
      },
      logo: `${siteUrl}/images/logo.png`, // ./static/images/
      name: `${companyName}`,
      phone: `+1-707-315-3329`,
      displayPhone: `(707) 315-3329`,
      priceRange: `$$$`,
      otherUrls: [
        `https://www.facebook.com/pages/Hilary-Molloy-skin-artistry-renewal/286199431401479`,
        `http://www.yelp.com/biz/hilary-molloy-napa`,
        `https://instagram.com/itshilarymolloy`,
      ],
      url: `${siteUrl}`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skincare By Hilary`,
        short_name: `Hilary Molloy`,
        start_url: `/`,
        description: `${description}`,
        background_color: `#ffb1b1`,
        theme_color: `#ffb1b1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY, 
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_SEO_BUSINESS_BASE_ID,
            tableName: `Treatments`,
          },
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    `gatsby-plugin-netlify`, //keep last
  ],
  flags: { DEV_SSR: false }
}
