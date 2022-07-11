import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const WorkExperience: PageSectionProps = {
	title  : "Work Experience",
	variant: "timeline",
	items  : [
		{
			"title"   : "Summer Research Assistant",
			"subtitle": "The University of Tennessee, Knoxville",
			"chips"   : {
				"date"        : [ "05/2022 - Present" ],
				"contentChips": [ "Cybersecurity", "Phishing", "Data Analytics" ],
				"languages"   : [ "Python", "GoLang" ],
				"tools"       : [ "Linux", "Git & GitHub" ]
			},
			"content" : [
				`Assist with research and ongoing projects, including software development and analysis on a variety of cybersecurity topics, writing and documenting research and findings, performing analytics, collecting and analyzing data, and creating visualizations of results.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Undergraduate Teaching Assistant",
			"subtitle": "The University of Tennessee, Knoxville",
			"chips"   : {
				"contentChips": [
					"Cybersecurity", "Security Goals", "Threat Modeling", "Software Security",
					"Operating System Security", "Cryptography", "Network Security", "Human Factors"
				],
				"date"        : [ "01/2022 - 05/2022" ]
			},
			"content" : [
				`Teaching assistant for Dr. Doowon Kim's Introduction to Cybersecurity course. Main responsibilities include assisting students and answering questions they may have about the course materials, providing useful feedback, grading quizzes and other assignments, etc.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Undergraduate Research Assistant",
			"subtitle": "The University of Tennessee, Knoxville",
			"chips"   : {
				"contentChips": [
					"Cybersecurity", "Web Security", "Certificates", "Phishing", "Data Analytics"
				],
				"languages"   : [ "Python", "JavaScript", "Bash Scripting" ],
				"tools"       : [ "Linux", "Git & GitHub", "Docker", "MongoDB", "PostgreSQL" ],
				"date"        : [ "03/2021 - 10/2021" ]
			},
			"content" : [
				`Assist with research and ongoing projects, including software development and analysis on a variety of cybersecurity topics, writing and documenting research and findings, performing analytics, collecting and analyzing data, and creating visualizations of results.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Software Developer Intern (Summer)",
			"subtitle": "Elo Touch Solutions",
			"chips"   : {
				"date"        : [ "05/2021 - 08/2021" ],
				"languages"   : [ "Java", "Kotlin", "C/C++", "Python", "Bash Scripting" ],
				"tools"       : [ "Linux", "Git", "Atlassian Jira", "Gradle", "Jenkins" ],
				"contentChips": [
					"Operating System Development", "AOSP", "Android SDK", "Embedded Systems"
				]
			},
			"content" : [
				`Design, implement, and test Software Frameworks, Solutions, and Demo Applications for ELO's
                Enterprise-Level Touchscreen Solutions, as well as for customers and business partners.`, `Using Java, Kotlin, Version Control systems, the Android SDK as well as ELO SDKs to develop
                platform solutions with the Android Open Source Project (AOSP) as part of a Full-Stack Environment.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Software Developer Intern (All-Year)",
			"subtitle": "Elo Touch Solutions",
			"chips"   : {
				"date"        : [ "01/2020 - 12/2020" ],
				"languages"   : [ "Java", "Kotlin", "C/C++", "Python", "Bash Scripting" ],
				"tools"       : [ "Linux", "Git", "Atlassian Jira", "Gradle", "Jenkins" ],
				"contentChips": [
					"Operating System Development", "AOSP", "Android SDK", "Embedded Systems"
				]
			},
			"content" : [
				`Design, implement, and test Software Frameworks, Solutions, and Demo Applications for ELO's
                Enterprise-Level Touchscreen Solutions, as well as for customers and business partners.`, `Using Java, Kotlin, Version Control systems, the Android SDK as well as ELO SDKs to develop
                platform solutions with the Android Open Source Project (AOSP) as part of a Full-Stack Environment.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Asset Protection",
			"subtitle": "Walmart Inc.",
			"chips"   : {
				"date"        : [ "05/2019 - 08/2019" ],
				"contentChips": [ "Asset Protection", "Theft Investigation", "Security" ]
			},
			"content" : [
				`Secure and safeguard the facility by observing and communicating suspicious activity, assisting
                with investigations, maintaining paperwork, logs and other required documentation, and appropriately
                executing emergency response procedures.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}
	]

}

export default WorkExperience

