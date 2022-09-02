import React from "react"
import { useSiteMetadata } from "../Utils"

export interface SEOProps {
	title?: string
	description?: string
	pathname?: string
	children?: React.ReactNode[]
}
const SEO = (props: SEOProps) => {
	const { siteUrl, image, title, description} = useSiteMetadata()

	const seo = {
		title: props.title || title,
		description: props.description || description,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${props.pathname || ``}`,
	}
	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
			{props.children}
		</>
	)
}

export default SEO;