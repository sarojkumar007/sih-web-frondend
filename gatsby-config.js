module.exports = {
  siteMetadata: {
    title: `Drishti`,
    description: `rk58_vigyaan_web_frontend`,
    author: `rk58_vigyaan`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // `gatsby-plugin-offline`
  ],
}
