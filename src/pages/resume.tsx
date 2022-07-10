import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"

const Resume = () => {
	const pageData = usePage("Resume")

	return <Page pageProps={pageData}>
	</Page>
}

export default Resume
