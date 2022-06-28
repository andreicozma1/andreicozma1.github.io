import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

// Use the types of the InfoCardData interface
const Current: CardListParams = {
	title: "Currently Enrolled",
	layout: SectionCardList,
	component: InfoCard,
	items: [
		{
			"title": "COSC 525 - Deep Learning",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		},
		{
			"title": "COSC 420 - Biologically-Inspired Computation",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		},
		{
			"title": "COSC 466 - Software Security",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		},
		{
			"title": "ECE 462 - Cyber-Physical System Security",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		},
		{
			"title": "COSC 402 - Senior Design Practicum",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		},
		{
			"title": "PHIL 101 - Intro to Philosophy",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		}
	]
}

export default Current
