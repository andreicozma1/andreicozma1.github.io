/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { useMediaQuery } from "@mui/material"
import { TemplatePageSectionProps } from "../TemplatedDataProps"
import PageSection from "./PageSection"
import { SectionMasonry } from "./SectionMasonry"
import { SectionTimeline } from "./SectionTimeline"
import Theme from "../../config/Theme"

const PageSectionResponsive = ({ props }: { props: TemplatePageSectionProps }) => {
	const matches = useMediaQuery(Theme.breakpoints.up("md"))

	return <PageSection title={props.title} notes={props.notes}>
		{matches && props.variant === "timeline" ? <SectionTimeline props={props}/> : <SectionMasonry props={props}/>}
	</PageSection>
}

export default PageSectionResponsive
