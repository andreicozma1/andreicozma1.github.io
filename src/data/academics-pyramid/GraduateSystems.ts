/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// Import shared course definitions
import cosc530 from '../academics-shared/COSC530-ComputerSystems.json'
import cosc562 from '../academics-shared/COSC562-OperatingSystems.json'
import cosc581 from '../academics-shared/COSC581-Algorithms.json'
import ece511 from '../academics-shared/ECE511-LinearSystems.json'

export default {
	title: "Tier 2: Systems & Algorithms",
	variant: "grid6",
	notes: [
		{
			text: "Graduate-level coursework in operating systems, computer architecture, algorithms, and control theory."
		},
	],
	items: [
		cosc562,
		cosc530,
		cosc581,
		ece511,
	]
}
