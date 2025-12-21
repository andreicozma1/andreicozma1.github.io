/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/PageElements/Page"
import { usePage } from "../Utils"
import SEO from "../components/SEO"

const Blog = () => {
	const pageData = usePage("Blog")

	return <Page pageProps={pageData}>
	</Page>
}

export default Blog

export const Head = () => (
	<SEO title="Blog" />
)
