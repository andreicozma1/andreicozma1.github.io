import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Seminars = () => {
	const page = usePage("Seminars")

	return <Layout page={page}>
	</Layout>
}

export default Seminars
