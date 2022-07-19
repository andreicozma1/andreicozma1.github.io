import * as React from "react"
import Page from "../components/PageElements/Page"
import SkillsSection from "../components/Custom/SkillsSection"
import { usePage } from "../Utils"

const Academics = () => {
	const pageData = usePage("Academics")

	return <Page pageProps={pageData}>
		<SkillsSection/>
	</Page>
}

export default Academics
