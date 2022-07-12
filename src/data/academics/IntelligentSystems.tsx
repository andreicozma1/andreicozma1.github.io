import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const Completed: PageSectionProps = {
	title  : "Intelligent Systems",
	variant: "grid6",
	items  : [
		{
			"title"   : "COSC 525 - Deep Learning",
			"subtitle": `Theoretical and practical aspects of how to build deep networks for representations of high-dimensional data.`,
			"chips"   : {
				"contentChips": [
					"Loss and Optimization", "Gradient Descent", "Back-Propagation", "Artificial Neural Network",
					"Convolutional Neural Network", "Auto-Encoders", "Generative Adversarial Network", "RNN", "LSTM",
					"Transformer"
				],
				"languages"   : [ "Python" ],
				"libraries"   : [ "TensorFlow", "Numpy", "Matplotlib" ],
				"tools"       : [ "Jupyter Notebook", "Git & GitHub" ]
			},
			"actions": [
				{
					"text": "Project GitHub",
					"href": "https://github.com/hunterprice04/Implementation-Of-A-Lightweight-Transformer-And-Analysis-Of-Text-Generation-Sampling-Techniques/",
					"target": "_blank"
				},
				{
					"text": "Project Report",
					"href": "https://github.com/hunterprice04/Implementation-Of-A-Lightweight-Transformer-And-Analysis-Of-Text-Generation-Sampling-Techniques/blob/main/submission/CS525_DeepLearning_FinalProject_Report.pdf",
					"target": "_blank"
				},
				{
					"text": "Project Proposal",
					"href": "https://github.com/hunterprice04/Implementation-Of-A-Lightweight-Transformer-And-Analysis-Of-Text-Generation-Sampling-Techniques/blob/main/submission/CS525_FinalProject_Proposal.pdf",
					"target": "_blank"
				},
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "COSC 523 - Artificial Intelligence",
			"subtitle": `Theoretical and applied aspects of artificial intelligence, including search, learning, decision-making, and reasoning.`,
			"chips"   : {
				"contentChips": [
					"Uninformed and Informed Search", "Search Engines", "Adversarial Search", "Constraint Satisfaction",
					"Planning", "Knowledge Representation & Reasoning", "Decision-Making", "Multi-Agent Systems"
				],
				"languages"   : [ "Python" ],
				"libraries"   : [ "TensorFlow", "Scikit-Learn", "Numpy", "Matplotlib" ],
				"tools"       : [ "Jupyter Notebook", "Git & GitHub" ]
			},
			"actions": [
				{
					"text": "Project GitHub",
					"href": "https://github.com/andreicozma1/CS523-TeamProject",
					"target": "_blank"
				},
				{
					"text": "Project Report",
					"href": "https://github.com/andreicozma1/CS523-TeamProject/blob/main/submission/CS523_AppliedAI_FinalReport.pdf",
					"target": "_blank"
				},
				{
					"text": "Project Proposal",
					"href": "https://github.com/andreicozma1/CS523-TeamProject/blob/main/submission/CS523_AppliedAI_ProjectProposal.pdf",
					"target": "_blank"
				},
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "COSC 522 - Machine Learning",
			"subtitle": `Theoretical and practical aspects of machine learning techniques related to pattern recognition, including both supervised and unsupervised learning methods for classification and regression.`,
			"chips"   : {
				"contentChips": [
					"Loss and Optimization", "Linear & Logistic Regression", "Feature Selection", "Regularization",
					"Cross Validation", "Model Selection", "Evaluation", "Support Vector Machines", "Decision Trees",
					"Boosting", "Neural Networks"
				],
				"languages"   : [ "Python" ],
				"libraries"   : [ "Numpy", "Matplotlib" ],
				"tools"       : [ "Jupyter Notebook", "Git & GitHub" ]
			},
			"actions": [
				{
					"text": "Project GitHub",
					"href": "https://github.com/andreicozma1/CS522-TeamProject/",
					"target": "_blank"
				},
				{
					"text": "Project Paper",
					"href": "https://github.com/andreicozma1/CS522-TeamProject/blob/main/submission/CS522_FinalTeamProject_Report.pdf",
					"target": "_blank"
				},
				{
					"text": "Presentation Slides",
					"href": "https://github.com/andreicozma1/CS522-TeamProject/blob/main/submission/CS522_FinalTeamProject_Presentation.pdf",
					"target": "_blank"
				}
			],
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "COSC 420 - Biologically-Inspired Computation",
			"subtitle": `Recent developments in computational methods inspired by nature, including the use of biologically inspired algorithms to solve problems.`,
			"chips"   : {
				"contentChips": [
					"Artificial Neural Networks", "Spiking Neural Networks", "Genetic Algorithms",
					"Evolutionary Programming", "Ant-Swarm Optimization", "Artificial Immune Systems",
					"Swarm Intelligence", "Cellular Automata", "Multi-Agent Systems", "Cooperation", "Competition"
				],
				"languages"   : [ "Python" ],
				"libraries"   : [ "Numpy", "Matplotlib" ],
				"tools"       : [ "Jupyter Notebook", "Git & GitHub" ]
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
			"avatar"  : <WorkspacesOutlinedIcon/>
		}
	]
}

export default Completed

