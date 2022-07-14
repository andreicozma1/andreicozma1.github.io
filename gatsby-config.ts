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
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-0JN1CT4YEF", // Google Analytics / GA
                ], // This object gets passed directly to the gtag config command
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: [],
                },
            },
        },
        {
            resolve: "gatsby-source-google-photos",
            options: {
                albumsTitles: ["Photography"],
                debug: true,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-image",
        'gatsby-plugin-material-ui',
        'gatsby-theme-material-ui',
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
        }
    ]
};

export default config;
