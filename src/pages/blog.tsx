/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/PageElements/Page"
import { usePage } from "../Utils"

const Projects = () => {
	const pageData = usePage("Blog")

	return <Page pageProps={pageData}>
	</Page>
}

export default Projects
