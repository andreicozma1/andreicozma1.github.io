/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"

const Projects = () => {
	const pageData = usePage("Projects")

	return <Page pageProps={pageData}>
	</Page>
}

export default Projects
