import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"
import PageSectionTimeline from "../../components/page/PageSectionTimeline"
import InfoCard from "../../components/cards/InfoCard"

// Use the types of the InfoCardData interface
const Cybersecurity: PageSectionProps = {
	title        : "Cybersecurity",
	layout       : PageSectionTimeline,
	itemComponent: InfoCard,
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
			"title"   : "COSC 469 - Mobile/Embedded Systems Security",
			"subtitle": `In-depth exploration of mobile and embedded systems security, their design challenges and common pitfalls, as well as the tools and techniques for security testing of these systems.`,
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"       : "COSC 366 - Introduction to Cybersecurity",
			"subtitle"    : `This course is an introduction to the field of Cybersecurity with a focus on the application of secure systems design principles and the analysis of common security vulnerabilities.`,
			"avatar"      : <AccessAlarmIcon/>,
			"contentChips": [
				"cryptography", "authentication", "access control", "secure communications", "network security",
				"software security"
			]
		}
	]
}

export default Cybersecurity

