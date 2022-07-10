import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"

const Seminars = () => {
	const pageData = usePage("Seminars")

	return <Page pageProps={pageData}>
	</Page>
}

export default Seminars
