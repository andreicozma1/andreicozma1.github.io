import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"

const Projects = () => {
	const pageData = usePage("Projects")

	return <Page pageProps={pageData}>
	</Page>
}

export default Projects
