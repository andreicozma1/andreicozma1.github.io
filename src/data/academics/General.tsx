import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const General: PageSectionProps = {
	title  : "General",
	variant: "grid6",
	items  : [
		{
			"title"   : "COSC 401/402 - Senior Design",
			"subtitle": `A design course that focuses the student’s attention on professional practice, ethics, 
						accumulated background of curricular components, and recent developments in the field. 
						The focus is on teaching both the design process and design principles that allow students 
						to utilize all of the above elements to effectively create designs for major design projects.`,
			"chips"   : {
				"languages": [ "JavaScript", "TypeScript", "HTML", "CSS", "Python", "Bash Scripting" ],
				"libraries": [ "React.JS", "Redux", "Node.JS", "Flask", "Material-UI" ],
				"tools"    : [ "Docker", "Git & GitHub", "GitHub", "GitHub Actions", "Atlassian Jira", "AWS" ]
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
				},
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "COSC 493 - Advanced Automata Theory",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `Working on the development of a Turing Machine to be used as an educational aid to students. 
						The pre-existing version of the simulator was written in Java and various improvements, 
						additions, and modifications were made to it in order to make it more user-friendly 
						and efficient. The goal of this project was to help students understand the basics of 
						automata theory and Turing Machines by providing them with a tool that would allow them to 
					 experiment with different configurations and see the results of their changes in real-time.`,
			"chips"   : {
				"contentChips": [
					"Turing Machine Simulator", "Automata Theory"
				],
				"languages"   : [ "Java" ],
				"libraries"   : [ "JavaFX" ],
				"tools"       : [ "Git & GitHub", "Maven" ]
			}
		}, {
			"title"   : "COSC 465 - Databases and Scripting Languages",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `In-depth focus on developing a strong understanding of the basics of databases and their 
						usage in web applications as well as an introduction to various scripting languages.`,
			"chips"   : {
				"contentChips": [
					"Relational Algebra", "Database Design", "Data Models", "Entity-Relationship Diagrams",
					"Web Databases"
				],
				"languages"   : [ "HTML", "CSS", "JavaScript", "PHP", "SQL" ],
				"libraries"   : [ "Node.JS", "JQuery" ],
				"tools"       : [ "MongoDB", "MySQL", "Git & GitHub" ]
			}

		}, {
			"title"   : "COSC 370 - Introduction to Scientific Computing",
			"subtitle": `An in-depth focus on the implementation, analysis, and design of numerical algorithms with
						the Python programming language in order to solve problems in science and engineering.`,
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"chips"   : {
				"contentChips": [
					"Program Design", "Data Structures", "Computational Complexity",
					"Scientific Computing Environments", "High Performance Software Packages"
				],
				"languages"   : [ "Python" ],
				"libraries"   : [ "Numpy", "Matplotlib" ],
				"tools"       : [ "Git & GitHub" ]
			}
		}, {
			"title"   : "COSC 367 - Honors Systems Programming",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `An in-depth introduction to the C programming language and its use in systems programming, 
						covering the methodologies of operating systems.`,
			"chips"   : {
				"contentChips": [
					"Operating Systems Design", "Computer Architectures", "Memory Management", "Process Management",
					"System Calls", "Buffering", "Interprocess Communication", "File Systems", "File IO",
					"Directory Management", "Metadata", "Stack Frames"
				],
				"languages"   : [ "C/C++", "X86 Assembly" ],
				"tools"       : [ "Git & GitHub" ]
			}

		}, {
			"title"   : "COSC 365 - Programming Languages and Systems",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `An in-depth study of the design, implementation, and application of programming languages
			 			as well as an introduction to the basics of operating systems.`,
			"chips"   : {
				"contentChips": [
					"Language Paradigms", "Memory Management", "Exception Handling", "Objects", "Inheritance",
					"Polymorphism", "Concurrency", "Processes & Threads", "Inter-Process Communication", "Scheduling"
				],
				"languages"   : [ "Java", "Python", "JavaScript", "HTML", "CSS", "PHP", "SQL" ],
				"libraries"   : [ "Node.JS", "JQuery" ],
				"tools"       : [ "Git & GitHub" ]
			}
		}, {
			"title"   : "COSC 361 - Operating Systems",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `In-depth study of the design, implementation, and performance of modern operating systems
			 			with a focus on Unix and a modern re-implementation of 6th edition Unix called XV6.`,
			"chips"   : {
				"contentChips": [
					"Process Management", "CPU Scheduling", "Process Synchronization", "Deadlocks", "Memory Management",
					"Virtual Memory", "File Systems", "IO Systems", "Security"
				],
				"languages"   : [ "C/C++" ],
				"tools"       : [ "Unix", "Linux", "Git & GitHub" ]
			}
		}, {
			"title"   : "COSC 340 - Software Engineering",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `A strong focus on the application of a systematic, disciplined, quantifiable approach to 
						the design, development, operation, and maintenance of software, and the study of these approaches.`,
			"chips"   : {
				"contentChips": [
					"Software Requirements", "Software Design", "Software Construction", "Software Testing",
					"Software Quality", "Software Maintenance", "Software Management", "Software Models and Methods"
				],
				"languages"   : [ "Python" ],
				"tools"       : [ "Git & GitHub", "GitHub", "GitHub Actions" ]
			}
		}, {
			"title"   : "COSC 317 - Honors Discrete Structures",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `Introduction to Set Theory, Graph Theory, and Logic & Proof strategies as 
						the principles of software programming and design. Application of proof techniques to prove 
						correctness of algorithms.`,
			"chips"   : {
				"contentChips": [
					"Set Theory", "Graph Theory", "Logic and Proof Techniques", "Mathematical Induction", "Recursion",
					"Functions", "Relations", "Equivalence Relations", "Partial Orderings"
				],
				"languages"   : [ "Python" ],
				"tools"       : [ "Git & GitHub" ]
			}
		}, {
			"title"   : "COSC 312 - Algorithm Analysis and Automata",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `This course is an introduction to the Theory of Computation, the logic of computation
						 with respect to machines as well as the implications related to current computing challenges 
						 and limits.`,
			"chips"   : {
				"contentChips": [
					"Finite Automata", "Regular Grammars & Languages", "Pushdown Automata",
					"Context-Free Grammars and Languages", "Turing Machines", "Lambda-Calculus", "Decidability",
					"The Halting Problem", "Reducibility", "Complexity"
				],
				"languages"   : [ "Python" ],
				"tools"       : [ "Git & GitHub" ]
			}
		}, {
			"title"   : "COSC 307 - Honors Data Structures and Algorithms II",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `This course focuses on the application of fundamental data structures and associated 
						algorithms most commonly used in software development and design.`,
			"chips"   : {
				"contentChips": [
					"Object-Oriented Programming", "Sorting Algorithms", "Disjoint Sets", "Basic Graph Algorithms",
					"Topological Sort", "Depth-First Search", "Breadth-First Search", "Shortest Path",
					"Minimum Spanning Trees", "Network Flow", "Dynamic Programming"
				],
				"languages"   : [ "C/C++" ],
				"tools"       : [ "Git & GitHub", "GitHub", "GitHub Actions", "Maven" ]
			}
		}, {
			"title"   : "COSC 140 - Data Structures and Algorithms I",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `Development and application of a multitude of data structures and algorithms 
						proeminently used in software design together with problem-solving techniques.`,
			"chips"   : {
				"contentChips": [
					"Data Structures and Algorithms", "Problem Solving", "Algorithm Development",
					"Algorithm Complexity", "Running Times", "IO Techniques", "Lists", "Queues", "Stacks",
					"Hash Tables", "Files"
				],
				"languages"   : [ "C/C++" ]
			}

		}, {
			"title"   : "COSC 130 - Computer Organization & Architecture",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `Hands-on experience with applying computer organization and architecture techniques 
						while developing software with C++ and RISC-V Assembly.`,
			"chips"   : {
				"contentChips": [
					"Number Systems", "Binary Arithmetic", "Floating-Point Arithmetic", "Boolean Algebra",
					"Bitwise Operators", "Combinational and Sequential Circuits", "Registers",
					"Processor Functional Units", "Control", "Pipelining", "Memory and Caching",
					"Stored Program Computing", "Memory Management", "Computer System Organization"
				],
				"languages"   : [ "C/C++", "RISC-V Assembly" ]
			}
		}, {
			"title"   : "COSC 102 - Introduction to Computer Science",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"subtitle": `Introduction and hands-on experience with the basics of programming languages, 
						problem solving, and algorithm development. Emphasis on organization and characteristics of 
						modern digital computers.`,
			"chips"   : {
				"contentChips": [
					"Variables and Assignments", "Branches", "Loops", "Arrays and Vectors", "Streams and Formatting",
					"Functions", "Command Line Arguments", "Classes and Structures", "Pointers", "Software Engineering",
					"Object-Oriented Programming", "Abstractions", "Procedures"
				],
				"languages"   : [ "C/C++" ]
			}
		}
	]
}

export default General

