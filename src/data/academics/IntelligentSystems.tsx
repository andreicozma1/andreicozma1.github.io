import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import PageSection from "../../components/page/PageSection"
import InfoCardAccordion from "../../components/cards/InfoCardAccordion"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const Completed: PageSectionProps = {
	title        : "Intelligent Systems",
	layout       : PageSection,
	itemComponent: InfoCardAccordion,
	items        : [
		{
			"title"  : "COSC 525 - Deep Learning",
			"avatar" : <AccessAlarmIcon/>,
			"content": null
		}, {
			"title"  : "COSC 523 - Artificial Intelligence",
			"avatar" : <AccessAlarmIcon/>,
			"content": [
				`Introduction to artificial intelligence with a focus on search, constraint satisfaction, and planning.`,
				`Topics include: uninformed and informed search, game playing, adversarial search, constraint satisfaction, planning, and knowledge representation.`
			]
		}, {
			"title"  : "COSC 522 - Machine Learning",
			"avatar" : <AccessAlarmIcon/>,
			"content": [
				`Introduction to the basics of machine learning with a focus on supervised learning, linear models, and optimization.`,
				`Topics include: linear algebra review, gradient descent, linear regression, logistic regression, feature selection 
        and regularization, nonlinear models, cross validation, model selection and evaluation, 
        support vector machines, decision trees, boosting, and neural networks.`
			]
		}, {
			"title"  : "COSC 420 - Biologically-Inspired Computation",
			"avatar" : <AccessAlarmIcon/>,
			"content": null
		}
	]
}

export default Completed

