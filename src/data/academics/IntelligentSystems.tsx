import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const Completed: PageSectionProps = {
	title: "Intelligent Systems", variant: "grid6", items: [
		{
			"title"    : "COSC 525 - Deep Learning",
			"subtitle" : `Theoretical and practical aspects of how to build deep networks for representations of high-dimensional data.`,
			"chips"    : {
				"contentChips": [
					"Loss and Optimization", "Artificial Neural Network", "Convolutional Neural Network", "Autoencoder",
					"Generative Adversarial Network", "RNN", "LSTM", "Transformer"
				], "languages": [ "Python" ], "libraries": [ "TensorFlow", "Numpy", "Matplotlib" ],
				"tools"       : [ "GitHub" ]
			}, "avatar": <AccessAlarmIcon/>
		}, {
			"title"    : "COSC 523 - Artificial Intelligence",
			"subtitle" : `Theoretical and applied aspects of artificial intelligence, including search, learning, decision-making, and reasoning.`,
			"chips"    : {
				"contentChips": [
					"Uninformed and Informed Search", "Search Engines", "Adversarial Search", "Constraint Satisfaction",
					"Planning", "Knowledge Representation & Reasoning", "Decision-Making", "Multi-Agent Systems"
				], "languages": [ "Python" ], "libraries": [ "TensorFlow", "Scikit-Learn", "Numpy", "Matplotlib" ],
				"tools"       : [ "GitHub" ]
			}, "avatar": <AccessAlarmIcon/>
		}, {
			"title"    : "COSC 522 - Machine Learning",
			"subtitle" : `Theoretical and practical aspects of machine learning techniques related to pattern recognition, including both supervised and unsupervised learning methods for classification and regression.`,
			"chips"    : {
				"contentChips": [
					"Loss and Optimization", "Linear & Logistic Regression", "Feature Selection", "Regularization",
					"Cross Validation", "Model Selection", "Evaluation", "Support Vector Machines", "Decision Trees",
					"Boosting", "Neural Networks"
				], "languages": [ "Python" ], "libraries": [ "Numpy", "Matplotlib" ], "tools": [ "GitHub" ]
			}, "avatar": <AccessAlarmIcon/>
		}, {
			"title"    : "COSC 420 - Biologically-Inspired Computation",
			"subtitle" : `Recent developments in computational methods inspired by nature, including the use of biologically inspired algorithms to solve problems.`,
			"chips"    : {
				"contentChips": [
					"Neural Networks", "Genetic Algorithms", "Evolutionary Programming", "Ant-Swarm Optimization",
					"Artificial Immune Systems", "Swarm Intelligence", "Cellular Automata", "Multi-Agent Systems",
					"Cooperation", "Competition"
				], "languages": [ "Python" ], "libraries": [ "Numpy", "Matplotlib" ]
			}, "avatar": <AccessAlarmIcon/>
		}
	]
}

export default Completed

