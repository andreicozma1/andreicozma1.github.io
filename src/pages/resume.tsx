import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Resume = () => {
	const pageData = usePage("Resume")

	return <Layout data={page}>
	</Layout>
}

export default Resume
