import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Seminars = () => {
	const pageData = usePage("Seminars")

	return <Layout data={page}>
	</Layout>
}

export default Seminars
