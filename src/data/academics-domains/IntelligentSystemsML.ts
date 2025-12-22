/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// Import shared course definitions
import cosc522 from '../academics-shared/COSC522-MachineLearning.json'
import cosc523 from '../academics-shared/COSC523-ArtificialIntelligence.json'
import cosc525 from '../academics-shared/COSC525-DeepLearning.json'
import ece517 from '../academics-shared/ECE517-ReinforcementLearning.json'
import cosc524 from '../academics-shared/COSC524-NLP.json'

export default {
	title: "Intelligent Systems & Machine Learning",
	variant: "grid6",
	notes: [
		{
			text: "Core expertise in machine learning, artificial intelligence, and intelligent systems spanning foundational to advanced topics."
		},
	],
	items: [
		cosc522,
		cosc523,
		cosc525,
		ece517,
		cosc524,
		{
				"title": "COSC 420 - Biologically-Inspired Computation",
				"subtitle": "Recent developments in computational methods inspired by nature, including the use of biologically inspired algorithms to solve problems.",
				"chips": {
						"contentChips": [
								"Artificial Neural Networks",
								"Spiking Neural Networks",
								"Genetic Algorithms",
								"Evolutionary Programming",
								"Ant-Swarm Optimization",
								"Artificial Immune Systems",
								"Swarm Intelligence",
								"Cellular Automata",
								"Multi-Agent Systems",
								"Cooperation",
								"Competition"
						],
						"languages": [
								"Python"
						],
						"libraries": [
								"NumPy",
								"Matplotlib"
						],
						"tools": [
								"Jupyter Notebook",
								"Git & GitHub"
						]
				},
				"actions": [
						{
								"text": "Project GitHub",
								"href": "https://github.com/andreicozma1/COSC420-FinalProject",
								"target": "_blank"
						},
						{
								"text": "Project Paper",
								"href": "https://github.com/andreicozma1/COSC420-FinalProject/blob/main/submission/CS420%20-%20Final%20Report%20-%20Andrei%20Cozma.pdf",
								"target": "_blank"
						},
						{
								"text": "Presentation Poster",
								"href": "https://github.com/andreicozma1/COSC420-FinalProject/blob/main/submission/CS420%20-%20Research%20Poster%20-%20Andrei%20Cozma.pdf",
								"target": "_blank"
						}
				],
				"avatar": "biotech"
		},
	]
}
