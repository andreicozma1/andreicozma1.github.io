/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/PageElements/Page"
import SkillsSection from "../components/Custom/SkillsSection"
import { usePage } from "../Utils"

const Resume = () => {
	const pageData = usePage("Resume")

	return <Page pageProps={pageData}>
		<SkillsSection/>
	</Page>
}

export default Resume
