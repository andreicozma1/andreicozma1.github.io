import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const WorkExperience: CardListParams = {
	title: "Work Experience",
	layout: SectionCardList,
	itemComponent: InfoCard,
	md: 12,
	items: [
		{
			"title": "Summer Research Assistant",
			"subtitle": "The University of Tennessee, Knoxville",
			"chips": "05/2021 - Present",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				`Assist with research and ongoing projects, including software development and analysis on a variety of cyber security topics, writing and documenting research and findings, performing analytics, collecting and analyzing data, and creating visualizations of results.`
			]
		},
		{
			"title": "Undergraduate Teaching Assistant",
			"subtitle": "The University of Tennessee, Knoxville",
			"chips": "01/2022 - 05/2022",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				`Teaching assistant for Dr. Doowon Kim's Introduction to Cybersecurity course.`,
				`Main responsibilities include assisting students and answering questions they may have about the course materials, providing useful feedback, grading quizzes and other assignments, etc.`
			]
		}
		,
		{
			"title": "Software Developer Intern (Summer)",
			"subtitle": "Elo Touch Solutions",
			"chips": "05/2021 - 08/2021",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				`Design, implement, and test Software Frameworks, Solutions, and Demo Applications for ELO's
                Enterprise-Level Touchscreen Solutions, as well as for customers and business partners.`,
				`Using Java, Kotlin, Version Control systems, the Android SDK as well as ELO SDKs to develop
                platform solutions with the Android Open Source Project (AOSP) as part of a Full-Stack Environment.`
			]
		},
		{
			"title": "Undergraduate Research Assistant",
			"subtitle": "The University of Tennessee, Knoxville",
			"chips": "03/2021 - 10/2021",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				`Assist with research and ongoing projects, including software development and analysis on a variety of cyber security topics, writing and documenting research and findings, performing analytics, collecting and analyzing data, and creating visualizations of results.`
			]
		}
		,
		{
			"title": "Software Developer Intern (All-Year)",
			"subtitle": "Elo Touch Solutions",
			"chips": "01/2020 - 12/2020",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				`Design, implement, and test Software Frameworks, Solutions, and Demo Applications for ELO's
                Enterprise-Level Touchscreen Solutions, as well as for customers and business partners.`,
				`Using Java, Kotlin, Version Control systems, the Android SDK as well as ELO SDKs to develop
                platform solutions with the Android Open Source Project (AOSP) as part of a Full-Stack Environment.`
			]
		},
		{
			"title": "Asset Protection",
			"subtitle": "Walmart Inc.",
			"chips": "05/2019 - 08/2019",
			"avatar": <AccessAlarmIcon/>,
			"content": [
				`Secure and safeguard the facility by observing and communicating suspicious activity, assisting
                with investigations, maintaining paperwork, logs and other required documentation, and appropriately
                executing emergency response procedures.`
			]
		}
	]

}

export default WorkExperience

