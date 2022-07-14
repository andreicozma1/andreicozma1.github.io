import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Personal Portfolio`,
        siteUrl: `https://www.andreicozma.com`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-material-ui',
        'gatsby-theme-material-ui',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "G-0JN1CT4YEF"
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }, {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-0JN1CT4YEF", // Google Analytics / GA
                    // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ad
                    // 360, and Campaign Manager)
                ], // This object gets passed directly to the gtag config command
            },
        }
    ]
};

export default config;
