import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const Education: PageSectionProps = {
	title  : "Education",
	variant: "timeline",
	items  : [
		{
			"title"      : "Computer Science M.S.",
			"subtitle"   : "University of Tennessee, Knoxville",
			"avatar"     : <AccessAlarmIcon/>,
			"headerChips": [
				"Starting Fall 2022"
			],
			"content"    : [
				"Concentration: Intelligent Systems & Machine Learning"
			]
		}, {
			"title"       : "Computer Science 5-Yr B.S./M.S.",
			"subtitle"    : "University of Tennessee, Knoxville",
			"avatar"      : <AccessAlarmIcon/>,
			"headerChips" : [
				"Summa Cum Laude", "GPA: 3.87", "08/2018 - 05/2022"
			],
			"contentChips": [
				"VolHacks President", "Pi Kappa Phi Secretary", "Chancellor's Honors Program"
			],
			"content"     : [
				"Minors: Cybersecurity & Business Administration"
			]
		}
	]
}

export default Education

