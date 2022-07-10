import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"

const Academics = () => {
	const pageData = usePage("Academics")

	return <Page pageProps={pageData}>
	</Page>
}

export default Academics
