import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"

const Blog = () => {
	const page = usePage("Blog")

	return (<div>
			<iframe src="https://blog.andreicozma.com/"
					style={{
						position: "absolute",
						width   : "100%",
						height  : "100%"
					}}/>
			<Layout page={page}>
			</Layout>
		</div>)
}

export default Blog
