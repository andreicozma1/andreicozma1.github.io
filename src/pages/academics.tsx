import * as React from "react"
import Page from "../components/layout/Page"
import { usePage } from "../config/PagesConfig"
import Skills from "../components/Skills"

const Academics = () => {
	const pageData = usePage("Academics")

	return <Page pageProps={pageData}>
		<Skills/>
	</Page>
}

export default Academics
