/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/PageElements/Page"
import SkillsSection from "../components/Custom/SkillsSection"
import { usePage } from "../Utils"
import SEO from "../components/SEO"

const AcademicsDomains = () => {
	const pageData = usePage("AcademicsDomains")

	return <Page pageProps={pageData}>
		<SkillsSection/>
	</Page>
}

export default AcademicsDomains

export const Head = () => (
	<SEO title="Academics - Domain Expertise" />
)
