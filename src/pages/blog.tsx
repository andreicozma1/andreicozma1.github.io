import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"

const Projects = () => {
	const pageData = usePage("Blog")

	return <Page pageProps={pageData}>
	</Page>
}

export default Projects
