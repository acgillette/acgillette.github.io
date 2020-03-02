/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-theme-notes`,
      options: {
        // basePath defaults to `/`
        basePath: `/notes`,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        },
        options: {
          props: {
            className: 'svg-logo'
          }
        }
      }
    },
    'gatsby-theme-gallery'
  ],
}
