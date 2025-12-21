import type { GatsbyConfig } from "gatsby"
import { execSync } from "child_process"

require("dotenv").config({
	path: `.env`
})

/**
 * Get git info for local development fallback.
 * In CI (GitHub Actions), these values come from environment variables.
 * Locally, we fall back to git commands, or "dev" if git is unavailable.
 */
const getGitInfo = () => {
	try {
		// Use --short=7 for consistent 7-character SHA
		const sha = execSync("git rev-parse --short=7 HEAD").toString().trim()
		const timestamp = execSync("git log -1 --format=%cI").toString().trim()
		return { sha, timestamp }
	} catch {
		return { sha: "dev", timestamp: new Date().toISOString() }
	}
}

const gitInfo = getGitInfo()

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: `https://www.andreicozma.com`,
		title  : `Andrei Cozma's Personal Portfolio`,
		image: `/avatar_home.jpg`,
		description: `This is my personal portfolio website, showcasing my education, work experiences, projects, achievements, licenses, and certifications, and much more!`,
		// Build metadata: prefer CI env vars, fall back to git info for local dev
		buildTime: process.env.GATSBY_BUILD_TIME || gitInfo.timestamp,
		// Only truncate the full SHA from CI; gitInfo.sha is already short
		commitSha: process.env.GATSBY_COMMIT_SHA?.substring(0, 7) || gitInfo.sha,
	}, // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins       : [
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
		},
		{
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
		}, "gatsby-plugin-image", {
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
