import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const About: PageSectionProps = {
	title  : "About",
	variant: "grid6",
	items  : [
		{
			"title"  : "Personal Statement",
			"avatar" : <AccessAlarmIcon/>,
			"content": [
				`In my personal and work life I am an enthusiastic and dedicated team player with a positive attitude,
            driven to adapt to any situation. I always strive to attain the highest possible standards of quality and excellence.`,
				`My fascination with technology from an early age has sparked a strong passion for learning, improving,
            problem-solving, and self-reflecting.
            I am constantly seeking to learn new skills, gain experiences and the knowledge needed to be able to
            help find solutions to world problems.`
			]
		}, {
			"title"       : "Topics of Interest",
			"avatar"      : <AccessAlarmIcon/>,
			"contentChips": [
				"Intelligent Systems", "Cybersecurity", "Deep Learning", "Machine Learning", "Artificial Intelligence",
				"Natural Language Processing", "Computer Vision", "Data Analytics", "Mobile & Embedded Systems"
			]
		}
	]
}

export default About

