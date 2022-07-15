/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/layout/Page"
import { usePage } from "../config/PagesConfig"
import Skills from "../components/Skills"

const Resume = () => {
	const pageData = usePage("Resume")

	return <Page pageProps={pageData}>
		<Skills/>
	</Page>
}

export default Resume
