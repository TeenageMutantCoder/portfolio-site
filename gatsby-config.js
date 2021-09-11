module.exports = {
    siteMetadata: {
        title: `Stevon Wright's Portfolio`,
        description: `Stevon Wright's software developer portfolio website. See my skills, projects, and ways to contact me.`,
        author: ``,
        siteUrl: `https://stevon-wright.netlify.app/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-use-dark-mode`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
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
                name: `Stevon Wright's Portfolio`,
                short_name: `SW Portfolio`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `minimal-ui`,
                icon: `src/images/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Roboto"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-YQYM8MGMT9",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: true,
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-N4LHHX5",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: "gatsby-route-change",
            },
        },
    ],
};
