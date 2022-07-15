/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/layout/Page"
import { usePage } from "../config/PagesConfig"

const Seminars = () => {
	const pageData = usePage("Seminars")

	return <Page pageProps={pageData}>
	</Page>
}

export default Seminars
