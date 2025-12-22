/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// Import shared course definitions
import math525 from '../academics-shared/MATH525-Statistics'
import math526 from '../academics-shared/MATH526-Statistics2'

export default {
	title: "Mathematics, Theory & Algorithms",
	variant: "grid6",
	notes: [
		{
			text: "Mathematical foundations including statistics, theoretical computer science, and algorithm analysis."
		},
	],
	items: [
		math525,
		math526,
		{
				"title": "COSC 317 - Honors Discrete Structures",
				"subtitle": "Introduction to Set Theory, Graph Theory, and Logic & Proof strategies as the principles of software programming and design. Application of proof techniques to prove correctness of algorithms.",
				"chips": {
						"contentChips": [
								"Set Theory",
								"Graph Theory",
								"Logic and Proof Techniques",
								"Mathematical Induction",
								"Recursion",
								"Functions",
								"Relations",
								"Equivalence Relations",
								"Partial Orderings"
						],
						"languages": [
								"Python"
						],
						"tools": [
								"Git & GitHub"
						]
				},
				"avatar": "lan"
		},
		{
				"title": "COSC 312 - Algorithm Analysis and Automata",
				"subtitle": "This course is an introduction to the Theory of Computation, the logic of computation with respect to machines as well as the implications related to current computing challenges and limits.",
				"chips": {
						"contentChips": [
								"Finite Automata",
								"Regular Grammars & Languages",
								"Push-down Automata",
								"Context-Free Grammars and Languages",
								"Turing Machines",
								"Lambda-Calculus",
								"Decidability",
								"The Halting Problem",
								"Reducibility",
								"Complexity"
						],
						"languages": [
								"Python"
						],
						"tools": [
								"Git & GitHub"
						]
				},
				"avatar": "lan"
		},
		{
				"title": "COSC 493 - Advanced Automata Theory",
				"subtitle": "Working on the development of a Turing Machine to be used as educational aid to students. The pre-existing version of the simulator was written in Java and various improvements, additions, and modifications were made to it in order to make it more user-friendly and efficient.",
				"chips": {
						"contentChips": [
								"Turing Machine Simulator",
								"Automata Theory"
						],
						"languages": [
								"Java"
						],
						"libraries": [
								"JavaFX"
						],
						"tools": [
								"Git & GitHub",
								"Maven"
						]
				},
				"avatar": "extension"
		},
	]
}
