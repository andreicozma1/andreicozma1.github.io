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

const AcademicsMatrix = () => {
	const pageData = usePage("AcademicsMatrix")

	return <Page pageProps={pageData}>
		<SkillsSection/>
	</Page>
}

export default AcademicsMatrix

export const Head = () => (
	<SEO title="Academics - Progressive Matrix" />
)
