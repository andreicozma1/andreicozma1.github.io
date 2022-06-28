import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Home = () => {
	const page = usePage("Home")

	return (
		<Layout page={page}>
		</Layout>
	)
}

export default Home
