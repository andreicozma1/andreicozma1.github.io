/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import React from "react"
import { Pages } from "../../config/Pages"
import PageSection from "../PageElements/PageSection"
import DataCardResponsive from "../DataCard/DataCardResponsive"
import SmartChipBox from "../SmartChip/SmartChipBox"
import { NoteProps } from "../UIElement/SlideNotes"

type SkillMap = Record<string, Record<string, number>>

interface SkillsSectionState {
	skillsList: SkillMap
	displayOrder: string[]
}

// Use PageSectionProps to get the title, notes, and items
class SkillsSection extends React.Component<Record<string, never>, SkillsSectionState> {
	title = "Skills"
	notes: Array<NoteProps> = [
		{
			text    : "An overview of my skillset based on the contents listed in this portfolio.",
			severity: "info"
		}
	]

	constructor(props: Record<string, never>) {
		super(props)
		this.state = {
			skillsList  : {},
			displayOrder: [ "languages", "libraries", "tools" ]
		}
	}

	countSkills(): SkillMap {
		const skl: SkillMap = {}
		Object.keys(Pages).forEach(pk => {
			const sections = Pages[pk]["sections"]
			if (sections) {
				sections.forEach(s => {
					const items = s["items"]
					if (items) {
						items.forEach(i => {
							const chips = i["chips"]
							if (chips) {
								Object.keys(chips).forEach(ck => {
									if (this.state.displayOrder.includes(ck)) {
										if (!skl[ck]) skl[ck] = {}
										const chipList = chips[ck]
										if (chipList) {
											chipList.forEach((c: string) => {
												if (!skl[ck][c]) skl[ck][c] = 0
												skl[ck][c]++
											})
										}
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

	componentDidMount() {
		let skl = this.countSkills()
		this.setState({ "skillsList": skl })
	}

	render() {
		return <PageSection title={this.title} notes={this.notes}>
			{this.state.skillsList && this.state.displayOrder.map((sk: string) => {
				const skillList = this.state.skillsList[sk]
				if (skillList) {
					let title = "Other"
					if (sk === "languages") title = "Programming Languages"
					if (sk === "libraries") title = "Libraries & Frameworks"
					if (sk === "tools") title = "Other"

					const skillCountsMap: { name: string; count: number }[] = []
					Object.entries(skillList).forEach(([ name, count ]) => {
						skillCountsMap.push({
							name,
							count: count as number
						})
					})
					skillCountsMap.sort((a, b) => b.count - a.count)

					const skillCounts: string[] = []
					skillCountsMap.forEach(sc => {
						skillCounts.push(`${sc.name} (${sc.count})`)
					})

					return <DataCardResponsive itemProps={{ title: title }} key={sk}>
						<SmartChipBox text={skillCounts} defaultVariant="filled"/>
					</DataCardResponsive>
				}
				return null
			})}
		</PageSection>
	}
}

export default SkillsSection