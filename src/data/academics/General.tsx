import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const General: PageSectionProps = {
	title  : "General",
	variant: "grid6",
	items  : [
		{
			"title"   : "COSC 402 - Senior Design Practicum",
			"subtitle": `A design course that focuses the student’s attention on professional practice, ethics, accumulated background of curricular components, and recent developments in the field. The focus is on teaching both the design process and design principles that allow students to utilize all of the above elements to effectively create designs for major design projects.`,
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "COSC 493 - Advanced Automata Theory",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": `Working on the development of a Turing Machine to be used as an educational aid to students. 
			The pre-existing version of the simulator was written in Java and various improvements, additions, 
			and modifications were made to it in order to make it more user-friendly and efficient. 
			The goal of this project was to help students understand the basics of automata theory and Turing Machines 
			by providing them with a tool that would allow them to experiment with different configurations and see the results of their changes in real-time.`
		}, {
			"title"       : "COSC 465 - Databases and Scripting Languages",
			"avatar"      : <AccessAlarmIcon/>,
			"subtitle"    : `In-depth focus on developing a strong understanding of the basics of databases and their usage in web applications as well as an introduction to various scripting languages.`,
			"contentChips": [
				"Relational Algebra", "Database Design", "Data Models", "Entity-Relationship Diagrams", "Web Databases",
				"XML", "HTML", "CSS", "JavaScript", "PHP", "Node.JS", "JQuery", "SQL", "MongoDB"
			]
		}, {
			"title"       : "COSC 370 - Introduction to Scientific Computing",
			"subtitle"    : `An in-depth focus on the implementation, analysis, and design of numerical algorithms with
				the Python programming language in order to solve problems in science and engineering.`,
			"avatar"      : <AccessAlarmIcon/>,
			"contentChips": [
				"Program Design", "Data Structures", "Computational Complexity", "Scientific Computing Environments",
				"High Performance Software Packages", "Python", "Numpy", "Matplotlib"
			]
		}, {
			"title"   : "COSC 367 - Honors Systems Programming",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`An in-depth introduction to the C programming language and its use in systems programming, covering the
        methodologies of operating systems with topics regarding memory and process layout, system calls, buffering,
        file I/O, file systems, directories, metadata, assembly code, stack frames, memory management, process
        management, and interprocess communication.`, `Enforcing efficient analysis and problem solving skills, the understanding of a variety of software tools,
        as well as knowledge of different operating system designs, computer architectures, data structures,
        algorithms, and programming languages in order to become proficient Software Developers and develop
        effective software solutions. `
			]
		}, {
			"title"   : "COSC 365 - Programming Languages and Systems",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`An in-depth study of the design, implementation, and application of programming languages as well as an introduction to the basics of operating systems.`,
				`Topics include: language paradigms, syntax and semantics, type systems, memory management, bindings, exception handling, objects, inheritance, polymorphism, and concurrency.`,
				`Also covered are: processes, threads, inter-process communication, scheduling, memory management, file systems, and security.`
			]
		}, {
			"title"   : "COSC 361 - Operating Systems",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`In-depth study of the design, implementation, and performance of modern operating systems with a focus on Unix and a modern re-implementation of 6th edition Unix called XV6.`,
				`Topics include process and thread management, CPU scheduling, process synchronization, deadlocks, memory management, virtual memory, file systems, I/O systems, and security.`
			]
		}, {
			"title"   : "COSC 340 - Software Engineering",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`A strong focus on the application of a systematic, disciplined, quantifiable approach to the design,
        development, operation, and maintenance of software, and the study of these approaches. Applying engineering
        to software processes that are used in real-life working environments to help design, manage, maintain, and
        test software at a large scale.`, `Covers the basics of Software Requirements, Design, Construction, Testing, Quality, Maintenance, Management
        of Processes, Models and Methods, etc.`
			]
		}, {
			"title"   : "COSC 317 - Honors Discrete Structures",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`Introduction to Set Theory, Graph Theory, and Logic & Proof strategies as the principles of software
        programming and design.`, `Topics covered include sets, combinatorics, logic and proof techniques, mathematical induction, recursion,
        functions, relations, equivalence relations, partial orderings.`, `Application of proof techniques to prove correctness of algorithms. Introduction to basic counting and
        combinatorics.`
			]
		}, {
			"title"   : "COSC 312 - Algorithm Analysis and Automata",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`This course is an introduction to the Theory of Computation, the logic of computation with respect to
        machines as well as the implications related to current computing challenges and limits.`, `Topics covered include finite automata, regular grammars & languages, pushdown automata, context-free
        grammars and languages, as well as Turing Machines and Lambda-Calculus. Also covers major topics of Computer
        Science such as decidability, the Halting Problem, reducibility, and complexity as relating to the analysis
        of algorithms.`
			]
		}, {
			"title"   : "COSC 307 - Honors Data Structures and Algorithms II",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`This course focuses on the application of fundamental data structures and associated algorithms most
        commonly used in software development and design.`, `Design and implement C++ programs that solve problems related to object-oriented programming, sorting
        algorithms, disjoint sets, basic graph algorithms including toplological sort, depth-first search, and
        breadth-first search, shortest path, minimum spanning trees, network flow / minimum cut, and dynamic
        programming.`, `An in-depth final project and presentation which included the design and implementation of a software
        application with the usage of a variety of data structures and algorithms covered in this course. 
        `
			]
		}, {
			"title"   : "COSC 140 - Data Structures and Algorithms I",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`Development and application of a multitude of data structures and algorithms proeminently used in software
        design together with problem-solving techniques.`, `Advanced problem solving and algorithm development, programming, data structures and applications, algorithm
        complexity and running times, I/O techniques, lists, queues, stacks, hash tables, files, etc.`
			]
		}, {
			"title"   : "COSC 130 - Computer Organization & Architecture",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`Hands-on experience with applying computer organization and architecture techniques while developing
        software with C++ and RISC-V Assembly.`, `Topics discussed and applied include number systems, binary arithmetic, floating-point arithmetic, boolean
        algebra, bitwise operators, combinational and sequential circuits, registers, processor functional units and
        control, pipelining, memory and caching, stored program computing, memory management, computer system
        organization, and assembly language programming.`
			]
		}, {
			"title"   : "COSC 102 - Introduction to Computer Science",
			"avatar"  : <AccessAlarmIcon/>,
			"subtitle": [
				`Introduction and hands-on experience with the basics of programming languages, problem solving, and
        algorithm development. variables and assignments, branches, loops, arrays and vectors, streams and
        formatting, functions, command line arguments, classes and structures, pointers.`, `Emphasis on organization and characteristics of modern digital computers with emphasis on software
        engineering, object-oriented programming, building abstractions with procedures and data, and programming in
        a modern computer language.`
			]
		}
	]
}

export default General

