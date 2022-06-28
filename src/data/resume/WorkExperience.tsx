import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const WorkExperience: CardListParams = {
	title: "Work Experience",
	layout: SectionCardList,
	component: InfoCard,
	items: [
		{
			"title": "University of Tennessee, Knoxville",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				"Graduated: (Fall 2018 - Spring 2022)",
				`Major: Computer Science`,
				`Minors: Cybersecurity & Business Administration`,
				`Activities & Societies: Chancellor's Honors Program, VolHacks Hackathon, Pi Kappa Phi Fraternity`
			]
		},
	]
}

export default WorkExperience

