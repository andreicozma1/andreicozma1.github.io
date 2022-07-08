import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Projects = () => {
	const pageData = usePage("Projects")

	return <Layout data={page}>
	</Layout>
}

export default Projects
