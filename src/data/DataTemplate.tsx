import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import PageSection from "../components/page/PageSection"
import InfoCardAccordion from "../components/cards/InfoCardAccordion"
import { PageSectionProps } from "../components/interfaces/PageSectionProps"

const DataTemplate: PageSectionProps = {
	title        : "Data Template",
	layout       : PageSection,
	itemComponent: InfoCardAccordion,
	items        : [
		{
			"title"  : "Section 1",
			"avatar" : <AccessAlarmIcon/>,
			"content": "Content 1"
		}, {
			"title"  : "Section 2",
			"avatar" : <AccessAlarmIcon/>,
			"content": "Content 2"
		}, {
			"title"  : "Section 3",
			"avatar" : <AccessAlarmIcon/>,
			"content": "Content 3"
		}, {
			"title"  : "Section 4",
			"avatar" : <AccessAlarmIcon/>,
			"content": "Content 4"
		}, {
			"title"  : "Section 5",
			"avatar" : <AccessAlarmIcon/>,
			"content": "Content 5"
		}
	]
}

export default DataTemplate

