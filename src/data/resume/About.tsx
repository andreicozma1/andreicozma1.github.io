import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const About: PageSectionProps = {
	title  : "About",
	variant: "grid6",
	items  : [
		{
			"title"  : "Personal Statement",
			"content": [
				`In my personal, professional, and academic life, I am an enthusiastic and dedicated team player with 
				a positive attitude. I always strive to attain the highest possible 
				standards of quality and excellence, and am driven to adapt to any situation.`, `My fascination with 
				technology from an early age has sparked a strong passion for learning,
				 problem-solving, self-reflecting, and improving. I am continually seeking to learn new skills, 
				 gain new experiences, and the knowledge needed to be able to help find solutions to world problems.`
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
			"avatar": <WorkspacesOutlinedIcon/>
		}
	]
}

export default About

