import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import PageSection from "../../components/page/PageSection"
import InfoCardAccordion from "../../components/cards/InfoCardAccordion"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const Cybersecurity: PageSectionProps = {
	title        : "Cybersecurity",
	layout       : PageSection,
	itemComponent: InfoCardAccordion,
	items        : [
		{
			"title"  : "COSC 466 - Software Security",
			"avatar" : <AccessAlarmIcon/>,
			"content": null
		}, {
			"title"  : "ECE 462 - Cyber-Physical System Security",
			"avatar" : <AccessAlarmIcon/>,
			"content": null
		}, {
			"title"  : "COSC 469 - Mobile/Embedded Systems Security",
			"avatar" : <AccessAlarmIcon/>,
			"content": [ `In-depth exploration of mobile and embedded systems security, their design challenges and common pitfalls, as well as the tools and techniques for security testing of these systems.` ]
		}, {
			"title"  : "COSC 366 - Introduction to Cybersecurity",
			"avatar" : <AccessAlarmIcon/>,
			"content": [
				`This course is an introduction to the field of Cybersecurity with a focus on the application of secure systems design principles and the analysis of common security vulnerabilities.`,
				`Topics covered include cryptographic primitives, authentication, access control, secure communications, network security, and software security.`
			]
		}
	]
}

export default Cybersecurity

