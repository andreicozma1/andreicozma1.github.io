import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
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
				`Assist with research and various ongoing projects, including the development of software and scripts to aid with the data collection, creation of visualizations, performing analysis of results, and writing and documenting research and findings.`
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
				`Teaching assistant for Dr. Doowon Kim's Introduction to
				Cybersecurity course. Primary responsibilities include assisting
				students and answering questions they may have about the course
				materials, providing helpful feedback, grading quizzes and other
				assignments, exam proctoring, etc.`
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
				`Assist with research on various ongoing projects, developing software and scripts to aid with collecting and analyzing data, creating visualizations, and interpreting results.`,
				`Topics: Security updates for JavaScript libraries, timeliness of security patches becoming available, the amounts of vulnerable library versions still widely in use, crypto-jacking, certificate collection, phishing blacklists, and more.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Android Software Developer Intern",
			"subtitle": "Elo Touch Solutions",
			"chips"   : {
				"date"        : [ "05/2021 - 08/2021" ],
				"languages"   : [ "Java", "Kotlin", "C/C++", "Python", "Bash Scripting" ],
				"tools"       : [ "Linux", "Git", "Atlassian Jira", "Gradle", "WebView", "Cordova", "Jenkins"],
				"contentChips": [
					"Operating System Development", "AOSP", "Android SDK", "Embedded Systems",
				]
			},
			"content" : [
				`Design, implement, and test software frameworks, solutions, and demo applications for ELO's enterprise touchscreen solutions and customers and business partners.`,
				`Using Java, Kotlin, Linux, Bash Scripting, Git, Atlassian JIRA, and the Android SDK to develop enterprise solutions with the Android Open Source Project (AOSP) as part of an Agile work environment.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Android Software Developer Intern",
			"subtitle": "Elo Touch Solutions",
			"chips"   : {
				"date"        : [ "01/2020 - 12/2020" ],
				"languages"   : [ "Java", "Kotlin", "C/C++", "Python", "Bash Scripting" ],
				"tools"       : [ "Linux", "Git", "Atlassian Jira", "Gradle", "WebView", "Cordova", "Jenkins"],
				"contentChips": [
					"Operating System Development", "AOSP", "Android SDK", "Embedded Systems",
				]
			},
			"content" : [
				`Design, implement, and test software frameworks, solutions, and demo applications for ELO's enterprise touchscreen solutions and customers and business partners.`,
				`Using Java, Kotlin, Linux, Bash Scripting, Git, Atlassian JIRA, and the Android SDK to develop enterprise solutions with the Android Open Source Project (AOSP) as part of an Agile work environment.`
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		},
		// {
		// 	"title"   : "Asset Protection",
		// 	"subtitle": "Walmart Inc.",
		// 	"chips"   : {
		// 		"date"        : [ "05/2019 - 08/2019" ],
		// 		"contentChips": [ "Asset Protection", "Theft Investigation", "Security" ]
		// 	},
		// 	"content" : [
		// 		`Secure and safeguard the facility by observing and communicating suspicious activity, assisting
        //         with investigations, maintaining paperwork, logs and other required documentation, and appropriately
        //         executing emergency response procedures.`
		// 	],
		// 	"avatar"  : <WorkspacesOutlinedIcon/>
		// }
	]

}

export default WorkExperience

