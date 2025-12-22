/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// Import shared course definitions
import cosc559 from '../academics-shared/COSC559-HCI'
import psyc410 from '../academics-shared/PSYC410-Perception'

export default {
	title: "Interdisciplinary & Specialized Topics",
	variant: "grid6",
	notes: [
		{
			text: "Coursework bridging computer science with human factors, neuroscience, security, and software engineering."
		},
	],
	items: [
		cosc559,
		psyc410,
		{
				"title": "COSC 465 - Databases and Scripting Languages",
				"subtitle": "In-depth focus on developing a strong understanding of the basics of databases and their usage in web applications as well as an introduction to various scripting languages.",
				"chips": {
						"contentChips": [
								"Relational Algebra",
								"Database Design",
								"Data Models",
								"Entity-Relationship Diagrams",
								"Web Databases"
						],
						"languages": [
								"HTML",
								"CSS",
								"JavaScript",
								"PHP",
								"SQL"
						],
						"libraries": [
								"Node.JS",
								"JQuery"
						],
						"tools": [
								"MongoDB",
								"MySQL",
								"Git & GitHub"
						]
				},
				"avatar": "table_rows"
		},
		{
				"title": "COSC 370 - Introduction to Scientific Computing",
				"subtitle": "An in-depth focus on the implementation, analysis, and design of numerical algorithms with the Python programming language in order to solve problems in science and engineering.",
				"chips": {
						"contentChips": [
								"Program Design",
								"Data Structures",
								"Computational Complexity",
								"Scientific Computing Environments",
								"High Performance Software Packages"
						],
						"languages": [
								"Python"
						],
						"libraries": [
								"NumPy",
								"Matplotlib"
						],
						"tools": [
								"Git & GitHub"
						]
				},
				"avatar": "science"
		},
		{
				"title": "COSC 365 - Programming Languages and Systems",
				"subtitle": "An in-depth study of the design, implementation, and application of programming languages as well as an introduction to the basics of operating systems.",
				"chips": {
						"contentChips": [
								"Language Paradigms",
								"Memory Management",
								"Exception Handling",
								"Objects",
								"Inheritance",
								"Polymorphism",
								"Concurrency",
								"Processes & Threads",
								"Inter-Process Communication",
								"Scheduling"
						],
						"languages": [
								"Java",
								"Python",
								"JavaScript",
								"HTML",
								"CSS",
								"PHP",
								"SQL"
						],
						"libraries": [
								"Node.JS",
								"JQuery"
						],
						"tools": [
								"Git & GitHub"
						]
				},
				"avatar": "code"
		},
	]
}
