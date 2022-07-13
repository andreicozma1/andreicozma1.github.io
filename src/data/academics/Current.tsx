import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const Current: PageSectionProps = {
	title  : "Fall 2022",
	variant: "grid6",
	items  : [
		{
			"title" : "COSC 524 - Natural Language Processing",
			"avatar": <WorkspacesOutlinedIcon/>
		}, {
			"title" : "COSC 517 - Reinforcement Learning",
			"avatar": <WorkspacesOutlinedIcon/>
		}, {
			"title" : "COSC 562 - Operating Systems: Design & Implementation",
			"avatar": <WorkspacesOutlinedIcon/>
		}, {
			"title" : "COSC 530 - Computer Systems Organization",
			"avatar": <WorkspacesOutlinedIcon/>
		}
	]
}

export default Current
