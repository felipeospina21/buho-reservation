module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-firebase-collections`,
      options: {
        // credential or appConfig
        credential: require(`./credentials.json`),
        appConfig: {
          apiKey: "AIzaSyALFdXGKJ_ZAEgWOkvEj-M_x4ur-jmuLoM",
          authDomain: "buho-app-27082.firebaseapp.com",
          projectId: "buho-app-27082",
          storageBucket: "buho-app-27082.appspot.com",
          messagingSenderId: "384099593732",
          appId: "1:384099593732:web:19453f5842cf8126d44f51",
          measurementId: "G-5WBN5QM2YL",
        },
        types: [
          {
            type: `Kioskos`,
            collection: `kioskos`,
            map: doc => ({
              capacity: doc.capacity,
            }),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyALFdXGKJ_ZAEgWOkvEj-M_x4ur-jmuLoM",
          authDomain: "buho-app-27082.firebaseapp.com",
          projectId: "buho-app-27082",
          storageBucket: "buho-app-27082.appspot.com",
          messagingSenderId: "384099593732",
          appId: "1:384099593732:web:19453f5842cf8126d44f51",
          measurementId: "G-5WBN5QM2YL",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
