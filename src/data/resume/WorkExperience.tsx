import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const WorkExperience: PageSectionProps = {
	title  : "Work Experience",
	variant: "timeline",
	items  : [
		{
			"title"       : "Summer Research Assistant",
			"subtitle"    : "The University of Tennessee, Knoxville",
			"headerChips" : [
				"Cybersecurity", "Phishing", "Data Analytics", "Python", "GoLang", "Linux", "Git"
			],
			"contentChips": "05/2021 - Present",
			"avatar"      : <AccessAlarmIcon/>,
			"content"     : [
				`Assist with research and ongoing projects, including software development and analysis on a variety of cybersecurity topics, writing and documenting research and findings, performing analytics, collecting and analyzing data, and creating visualizations of results.`
			]
		}, {
			"title"       : "Undergraduate Teaching Assistant",
			"subtitle"    : "The University of Tennessee, Knoxville",
			"headerChips" : [
				"Cybersecurity", "Security Goals", "Threat Modeling", "Software Security", "Operating System Security", "Cryptography",
				"Network Security", "Human Factors"
			],
			"contentChips": "01/2022 - 05/2022",
			"avatar"      : <AccessAlarmIcon/>,
			"content"     : [
				`Teaching assistant for Dr. Doowon Kim's Introduction to Cybersecurity course. Main responsibilities include assisting students and answering questions they may have about the course materials, providing useful feedback, grading quizzes and other assignments, etc.`
			]
		}, {
			"title"       : "Undergraduate Research Assistant",
			"subtitle"    : "The University of Tennessee, Knoxville",
			"headerChips" : [
				"Cybersecurity", "Web Security", "Certificates", "Phishing", "Data Analytics", "Python", "JavaScript", "Bash Scripting", "Linux", "Git", "Docker",  "MongoDB", "SQL",
			],
			"contentChips": "03/2021 - 10/2021",
			"avatar"      : <AccessAlarmIcon/>,
			"content"     : [
				`Assist with research and ongoing projects, including software development and analysis on a variety of cybersecurity topics, writing and documenting research and findings, performing analytics, collecting and analyzing data, and creating visualizations of results.`
			]
		}, {
			"title"       : "Software Developer Intern (Summer)",
			"subtitle"    : "Elo Touch Solutions",
			"headerChips" : [
				"Operating System Development", "AOSP", "Android SDK", "Embedded Systems", "Java", "Kotlin", "C/C++",
				"Python", "Bash Scripting", "Linux", "Git", "Atlassian Jira", "Jenkins"
			],
			"contentChips": "05/2021 - 08/2021",
			"avatar"      : <AccessAlarmIcon/>,
			"content"     : [
				`Design, implement, and test Software Frameworks, Solutions, and Demo Applications for ELO's
                Enterprise-Level Touchscreen Solutions, as well as for customers and business partners.`, `Using Java, Kotlin, Version Control systems, the Android SDK as well as ELO SDKs to develop
                platform solutions with the Android Open Source Project (AOSP) as part of a Full-Stack Environment.`
			]
		}, {
			"title"       : "Software Developer Intern (All-Year)",
			"subtitle"    : "Elo Touch Solutions",
			"headerChips" : [
				"Operating System Development", "AOSP", "Android SDK", "Embedded Systems", "Java", "Kotlin", "C/C++",
				"Python", "Bash Scripting", "Linux", "Git", "Atlassian Jira", "Jenkins"
			],
			"contentChips": "01/2020 - 12/2020",
			"avatar"      : <AccessAlarmIcon/>,
			"content"     : [
				`Design, implement, and test Software Frameworks, Solutions, and Demo Applications for ELO's
                Enterprise-Level Touchscreen Solutions, as well as for customers and business partners.`, `Using Java, Kotlin, Version Control systems, the Android SDK as well as ELO SDKs to develop
                platform solutions with the Android Open Source Project (AOSP) as part of a Full-Stack Environment.`
			]
		}, {
			"title"       : "Asset Protection",
			"subtitle"    : "Walmart Inc.",
			"headerChips" : [
				"Asset Protection", "Theft Investigation", "Security"
			],
			"contentChips": "05/2019 - 08/2019",
			"avatar"      : <AccessAlarmIcon/>,
			"content"     : [
				`Secure and safeguard the facility by observing and communicating suspicious activity, assisting
                with investigations, maintaining paperwork, logs and other required documentation, and appropriately
                executing emergency response procedures.`
			]
		}
	]

}

export default WorkExperience

