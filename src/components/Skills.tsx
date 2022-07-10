import React, { useEffect, useState } from "react"
import InfoCard from "./page/cards/InfoCard"
import { pages } from "../config/pages"
import SmartChipBox from "./page/chips/SmartChipBox"
import { PageSection } from "./page/PageSectionTemplate"
import { PageSectionProps } from "./interfaces/PageSectionProps"

// Use PageSectionProps to get the title, notes, and items
const Skills = ({
					title,
					notes,
					items,
					variant
				}: PageSectionProps) => {
	const displayOrder = [ "languages", "libraries", "tools" ]
	title = title || "Skills"

	notes = [
		{
			text    : "An overview of my skillset based on the contents listed in this portfolio.",
			severity: "info"
		}
	]
	const [ skillsList, setSkillsList ] = useState({})

	function countSkills() {
		let skl = {}
		Object.keys(pages).forEach(pk => {
			let sections = pages[pk]["sections"]
			if (sections) {
				sections.forEach(s => {
					let items = s["items"]
					if (items) {
						items.forEach(i => {
							let chips = i["chips"]
							if (chips) {
								Object.keys(chips).forEach(ck => {
									if (displayOrder.includes(ck)) {
										if (!skl[ck]) skl[ck] = {}
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

	return <PageSection
		title={title}
		notes={notes}
	>

		{skillsList && displayOrder.map(sk => {
			const skillList = skillsList[sk]
			if (skillList) {

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

				return <InfoCard title={title} key={sk}>
					<SmartChipBox text={skillCounts} defaultVariant="filled"/>
				</InfoCard>
			}
		})}
	</PageSection>

}

export default Skills