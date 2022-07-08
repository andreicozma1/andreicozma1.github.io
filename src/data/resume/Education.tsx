import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const Education: CardListParams = {
	title: "Education", layout: SectionCardList, itemComponent: InfoCard, md: 12, items: [
		{
			"title": "MS in Computer Science",
			"subtitle": "University of Tennessee, Knoxville",
			"avatar": <AccessAlarmIcon/>,
			"chips": [
				"GPA: 3.9", "08/2022 - Present"
			],
			"content": [
				"Concentration: Intelligent Systems & Machine Learning"
			]
		}, {
			"title": "BS in Computer Science",
			"subtitle": "University of Tennessee, Knoxville",
			"avatar": <AccessAlarmIcon/>,
			"chips": [
				"GPA: 3.87", "08/2018 - 05/2022"
			],
			"content": [
				"Honors: Summa Cum Laude + Chancellor's Honors Program", "Concentration: Computer Science 5-Yr BS/MS",
				"Minors: Cybersecurity & Business Administration"
			]
		}
	]
}

export default Education

