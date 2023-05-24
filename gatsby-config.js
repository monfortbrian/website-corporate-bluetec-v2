module.exports = {
    siteMetadata: {
        title: `Bluetec`,
        description: `We are a one-stop digital startup that merges exceptional design with state-of-art technology.Our team strategizes, designs, and develops custom web & mobile apps to provide support and grow your business.`,
        author: `@Bluetec-startup`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "static/images/icons/favicon.svg",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
