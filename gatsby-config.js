module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Assistika Outsourced technical writing",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Assistika Outsourced technical writing",
        short_name: "Assistika",
        start_url: "/",
        background_color: "#46aa54",
        theme_color: "#46aa54",
        display: "minimal-ui",
        icon: "src/assets/img/siteIcon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
