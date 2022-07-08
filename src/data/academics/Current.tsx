import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

// Use the types of the InfoCardData interface
const Current: CardListParams = {
	title: "Fall 2022", layout: SectionCardList, itemComponent: InfoCard, items: [
		{
			"title": "COSC 524 - Natural Language Processing", "avatar": <AccessAlarmIcon/>, "content": null
		}, {
			"title": "COSC 517 - Reinforcement Learning", "avatar": <AccessAlarmIcon/>, "content": null
		}, {
			"title": "COSC 562 - Operating Systems: Design & Implementation",
			"avatar": <AccessAlarmIcon/>,
			"content": null
		}, {
			"title": "COSC 530 - Computer Systems Organization", "avatar": <AccessAlarmIcon/>, "content": null
		}
	]
}

export default Current
