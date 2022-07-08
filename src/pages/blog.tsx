import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Projects = () => {
	const page = usePage("Blog")

	return <Layout page={page}>
	</Layout>
}

export default Projects
