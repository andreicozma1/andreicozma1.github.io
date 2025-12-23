/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "./Page"
import SkillsSection from "../Custom/SkillsSection"
import { usePage } from "../../Utils"

interface AcademicsPageTemplateProps {
	pageKey: string
}

/**
 * Reusable template for academics page variants.
 * Eliminates code duplication across academics-*.tsx page files.
 *
 * @param pageKey - The key to look up page configuration in Pages.tsx
 */
const AcademicsPageTemplate: React.FC<AcademicsPageTemplateProps> = ({ pageKey }) => {
	const pageData = usePage(pageKey)

	return (
		<Page pageProps={pageData}>
			<SkillsSection />
		</Page>
	)
}

export default AcademicsPageTemplate
