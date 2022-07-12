import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const About: PageSectionProps = {
	title  : "About",
	variant: "grid6",
	items  : [
		{
			"title"  : "Personal Statement",
			"content": [
				`I am an enthusiastic and dedicated team player with a positive attitude in my personal, professional, and academic life. 
				I always strive to attain the highest possible standards of quality and excellence and am driven to adapt to any situation.`,
				`My fascination with computers, electronics, and science from an early age has sparked a passion for exploring and 
				learning about the inner workings of current and emerging technologies that have become essential to our day-to-day lives. 
				I am continually seeking to learn new skills, gain new experiences, and the knowledge needed to help find solutions to world problems.`
			],
			"avatar" : <WorkspacesOutlinedIcon/>
		}, {
			"title" : "Topics of Interest",
			"chips" : {
				"contentChips": [
					"Intelligent Systems", "Deep Learning", "Cybersecurity", "Web Development", "Data Science",
					"Data Analytics", "Mobile & Embedded Systems", "Natural Language Processing", "Computer Vision"
				]
			},
			"actions": [
				{
					"text": "Resume PDF",
					"href": "/resume.pdf",
					"target": "_blank"
				}
			],
			"avatar": <WorkspacesOutlinedIcon/>
		}
	]
}

export default About

