import React, { useEffect, useState } from "react"
import InfoCard from "./page/cards/InfoCard"
import { pages } from "../config/pages"
import SmartChipBox from "./page/chips/SmartChipBox"
import { PageSection } from "./page/PageSectionTemplate"

const Skills = () => {
	const storeSkills = [ "languages", "libraries", "tools" ]

	const [ skillsList, setSkillsList ] = useState({})

	function countSkills() {
		let skl = {}
		Object.keys(pages).forEach(pk => {
			// for each section
			let sections = pages[pk]["sections"]
			if (sections) {
				sections.forEach(s => {
					// for each section
					let items = s["items"]
					if (items) {
						items.forEach(i => {
							// for each item
							let chips = i["chips"]
							if (chips) {
								Object.keys(chips).forEach(ck => {
									// if the ck is in the storeSkills array
									if (storeSkills.includes(ck)) {
										if (!skl[ck]) {
											skl[ck] = {}
										}
										chips[ck].forEach(c => {
											if (!skl[ck][c]) skl[ck][c] = 0

											skl[ck][c]++
										})
									}
								})
							}
						})
					}
				})
			}
		})
		return skl
	}

	useEffect(() => {
		let skl = countSkills()
		setSkillsList(skl)
	}, [])

	const displayOrder = [ "languages", "libraries", "tools" ]

	return <PageSection
		title="Skills">

		{skillsList && displayOrder.map(sk => {
			const skillList = skillsList[sk]

			let title = "Other"
			if (sk === "languages") title = "Programming Languages"
			if (sk === "libraries") title = "Libraries & Frameworks"
			if (sk === "tools") title = "Other"

			let skillCountsMap: { name: string; count: number }[] = []
			Object.entries(skillList).forEach(([ name, count ]) => {
				skillCountsMap.push({
					name,
					count
				})
			})
			skillCountsMap.sort((a, b) => b.count - a.count)

			let skillCounts: string[] = []
			skillCountsMap.forEach(sc => {
				skillCounts.push(`${sc.name} (${sc.count})`)
			})

			return <InfoCard title={title}><SmartChipBox text={skillCounts}/>
			</InfoCard>
		})}
	</PageSection>

}

export default Skills