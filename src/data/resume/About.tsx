import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const About: CardListParams = {
	title: "About", // note: "I am a Software Developer with a strong passion for learning, improving, and creating.",
	// noteSeverity: "info",
	layout: SectionCardList, itemComponent: InfoCard, items: [
		{
			"title": "Personal Statement", "avatar": <AccessAlarmIcon/>, "content": [
				`In my personal and work life I am an enthusiastic and dedicated team player with a positive attitude,
            driven to adapt to any situation. I always strive to attain the highest possible standards of quality and excellence.`,
				`My fascination with technology from an early age has sparked a strong passion for learning, improving,
            problem-solving, and self-reflecting.
            I am constantly seeking to learn new skills, gain experiences and the knowledge needed to be able to
            help find solutions to world problems.`
			]
		}, {
			"title": "Research Interests", "avatar": <AccessAlarmIcon/>, "content": [
				`Main research interests include using Deep Learning, Machine Learning, and Artificial Intelligence techniques with a focus in Natural Language Processing and Computer Vision.`,
				`Other areas of interest include Cybersecurity, Biologically-Inspired Computation, Scientific Computing, Mobile & Embedded Systems, among others.`
			]
		}
	]
}

export default About

