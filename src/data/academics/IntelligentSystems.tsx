import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"
import PageSection from "../../components/page/PageSection"
import InfoCard from "../../components/cards/InfoCard"

// Use the types of the InfoCardData interface
const Completed: PageSectionProps = {
	title        : "Intelligent Systems",
	layout       : PageSection,
	itemComponent: InfoCard,
	variant	  : "grid6",
	items        : [
		{
			"title"  : "COSC 525 - Deep Learning",
			"avatar" : <AccessAlarmIcon/>,
			"content": null
		}, {
			"title"       : "COSC 523 - Artificial Intelligence",
			"subtitle"    : `Introduction to artificial intelligence with a focus on search, constraint satisfaction, and planning.`,
			"avatar"      : <AccessAlarmIcon/>,
			"contentChips": [
				"uninformed and informed search", "game playing", "adversarial search", "constraint satisfaction",
				"planning", "knowledge representation"
			]
		}, {
			"title"       : "COSC 522 - Machine Learning",
			"subtitle"    : `Introduction to the basics of machine learning with a focus on supervised learning, linear models, and optimization.`,
			"avatar"      : <AccessAlarmIcon/>,
			"contentChips": [
				"gradient descent", "linear & logistic regression", "feature selection", "regularization",
				"cross validation", "model selection", "evaluation", "support vector machines", "decision trees",
				"boosting", "neural networks"
			]
		}, {
			"title"  : "COSC 420 - Biologically-Inspired Computation",
			"avatar" : <AccessAlarmIcon/>,
			"content": null
		}
	]
}

export default Completed

