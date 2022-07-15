import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
import * as React from "react"
import { PageSectionProps } from "../../../components/props/PageComponentsProps"

// Use the types of the InfoCardData interface
const Current: PageSectionProps = {
	title  : "Fall 2022",
	variant: "grid6",
	items  : [
		{
			"title" : "COSC 524 - Natural Language Processing",
			"avatar": "translate"
		}, {
			"title" : "COSC 517 - Reinforcement Learning",
			"avatar": "smart_toy"
		}, {
			"title" : "COSC 562 - Operating Systems: Design & Implementation",
			"avatar": "system_update_alt"
		}, {
			"title" : "COSC 530 - Computer Systems Organization",
			"avatar": "computer"
		}
	]
}

export default Current
