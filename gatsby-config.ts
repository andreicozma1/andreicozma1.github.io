import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
	path: `.env`
})

const config: GatsbyConfig = {
	siteMetadata: {
		title  : `Andrei Cozma's Personal Portfolio`,
		siteUrl: `https://www.andreicozma.com`,
		description: `This is my personal portfolio website, showcasing my education, work experiences, projects, achievements, licenses, and certifications, and much more!`
	}, // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins       : [
		// {
		//     resolve: `gatsby-source-contentful`,
		//     options: {
		//         spaceId: process.env.CONTENTFUL_SPACE_ID,
		//         // Learn about environment variables: https://gatsby.dev/env-vars
		//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		//     },
		// },
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds : [
					"G-0JN1CT4YEF" // Google Analytics / GA
				], // This object gets passed directly to the gtag config command
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head   : true, // Avoids sending pageview hits from custom paths
					exclude: []
				}
			}
		}, {
			resolve: "gatsby-source-google-photos",
			options: {
				albumsTitles   : [ "Photography" ],
				photosMaxWidth : 1920,
				photosMaxHeight: 1080 // debug: true,
			}
		}, {
			resolve: "gatsby-plugin-google-fonts",
			options: {
				fonts: [
					"material icons", "roboto:300,400,500,700"
				]
			}
		}, "gatsby-transformer-sharp", {
			resolve: "gatsby-plugin-sharp",
			options: {
				defaults: {
					formats         : [ `auto`, `webp` ],
					placeholder     : `blurred`,
					quality         : 100,
				}
			}
		}, "gatsby-plugin-image", "gatsby-plugin-material-ui", "gatsby-theme-material-ui", {
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key  : "images"
		}, {
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key  : "pages"
		}
	]
}

export default config
