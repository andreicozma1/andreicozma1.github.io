import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Academics = () => {
	const page = usePage("Academics")

	return (
		<Layout page={page}>
			{page.content}
		</Layout>
	)
}

export default Academics
