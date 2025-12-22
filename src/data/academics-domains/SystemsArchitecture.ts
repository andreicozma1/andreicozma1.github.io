/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// Import shared course definitions
import cosc530 from '../academics-shared/COSC530-ComputerSystems'
import cosc562 from '../academics-shared/COSC562-OperatingSystems'
import cosc581 from '../academics-shared/COSC581-Algorithms'
import ece511 from '../academics-shared/ECE511-LinearSystems'

export default {
	title: "Systems Architecture & Design",
	variant: "grid6",
	notes: [
		{
			text: "Comprehensive systems education spanning operating systems, computer architecture, and software engineering."
		},
	],
	items: [
		cosc562,
		cosc530,
		cosc581,
		ece511,
		{
				"title": "COSC 361 - Operating Systems",
				"subtitle": "In-depth study of the design, implementation, and performance of modern operating systems with a focus on Unix and a modern re-implementation of 6th edition Unix called XV6.",
				"chips": {
						"contentChips": [
								"Process Management",
								"CPU Scheduling",
								"Process Synchronization",
								"Deadlocks",
								"Memory Management",
								"Virtual Memory",
								"File Systems",
								"IO Systems",
								"Security"
						],
						"languages": [
								"C/C++"
						],
						"tools": [
								"Unix",
								"Linux",
								"Git & GitHub"
						]
				},
				"avatar": "system_update_alt"
		},
		{
				"title": "COSC 367 - Honors Systems Programming",
				"subtitle": "An in-depth introduction to the C programming language and its use in systems programming, covering the methodologies of operating systems.",
				"chips": {
						"contentChips": [
								"Operating Systems Design",
								"Computer Architectures",
								"Memory Management",
								"Process Management",
								"System Calls",
								"Buffering",
								"Interprocess Communication",
								"File Systems",
								"File IO",
								"Directory Management",
								"Metadata",
								"Stack Frames"
						],
						"languages": [
								"C/C++",
								"X86 Assembly"
						],
						"tools": [
								"Git & GitHub"
						]
				},
				"avatar": "system_update_alt"
		},
		{
				"title": "COSC 401/402 - Senior Design",
				"subtitle": "A design course that focuses the student's attention on professional practice, ethics, accumulated background of curricular components, and recent developments in the field. The focus is on teaching both the design process and design principles that allow students to utilize all of the above elements to effectively create designs for major design projects.",
				"chips": {
						"languages": [
								"JavaScript",
								"TypeScript",
								"HTML",
								"CSS",
								"Python",
								"Bash Scripting"
						],
						"libraries": [
								"React.JS",
								"Redux",
								"Node.JS",
								"Flask",
								"Material-UI"
						],
						"tools": [
								"Docker",
								"Git & GitHub",
								"GitHub Actions",
								"Atlassian Jira",
								"AWS"
						]
				},
				"actions": [
						{
								"text": "Project GitHub",
								"href": "https://github.com/CS401-Team-Project/Smart-Ledger/",
								"target": "_blank"
						},
						{
								"text": "Project Report",
								"href": "https://github.com/CS401-Team-Project/Smart-Ledger/blob/main/Documents/CS402_FinalProject_Report.pdf",
								"target": "_blank"
						},
						{
								"text": "Project Presentation",
								"href": "https://github.com/CS401-Team-Project/Smart-Ledger/blob/main/Documents/CS402_FinalProject_Presentation.pdf",
								"target": "_blank"
						}
				],
				"avatar": "star"
		},
	]
}
