import * as React from "react"
import Page from "../components/Layout"
import { usePage } from "../config/pages"

const Projects = () => {
	const pageData = usePage("Blog")

	return <Page data={pageData}>
	</Page>
}

export default Projects
