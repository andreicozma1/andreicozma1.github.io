import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Contact = () => {
	const page = usePage("Contact")

	return (
		<Layout page={page}>
		</Layout>
	)
}

export default Contact
