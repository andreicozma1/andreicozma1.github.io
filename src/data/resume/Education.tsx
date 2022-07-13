import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const Education: PageSectionProps = {
	title  : "Education",
	variant: "timeline",
	items  : [
		{
			"title"   : "Computer Science M.S.",
			"subtitle": "University of Tennessee, Knoxville",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"chips"   : {
				"date": [ "Starting Fall 2022" ]
			},
			"content" : [
				"Concentration: Intelligent Systems & Machine Learning"
			]
		}, {
			"title"   : "Computer Science 5-Yr B.S./M.S.",
			"subtitle": "University of Tennessee, Knoxville",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"chips"   : {
				"date"     : [ "08/2018 - 05/2022" ],
				"awards"   : [ "Summa Cum Laude", "GPA: 3.87" ],
				"positions": [ "VolHacks President", "Pi Kappa Phi Secretary", "Chancellor's Honors Program" ]
			},
			"content" : [
				"Minors: Cybersecurity & Business Administration"
			]
		}
	]
}

export default Education

