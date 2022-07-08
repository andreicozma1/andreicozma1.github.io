import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Academics = () => {
	const pageData = usePage("Academics")

	return <Layout data={page}>
	</Layout>
}

export default Academics
