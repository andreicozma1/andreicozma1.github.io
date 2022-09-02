import * as React from "react"
import Page from "../components/PageElements/Page"
import SkillsSection from "../components/Custom/SkillsSection"
import { usePage } from "../Utils"
import SEO from "../components/SEO"

const Academics = () => {
	const pageData = usePage("Academics")

	return <Page pageProps={pageData}>
		<SkillsSection/>
	</Page>
}

export default Academics

export const Head = () => (
	<SEO />
)