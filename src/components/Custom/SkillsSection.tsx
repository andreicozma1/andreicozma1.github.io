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

// Use PageSectionProps to get the title, notes, and items
class SkillsSection extends React.Component<any, any> {
	title = "Skills"
	notes: Array<NoteProps> = [
		{
			text    : "An overview of my skillset based on the contents listed in this portfolio.",
			severity: "info"
		}
	]

	constructor(props: any) {
		super(props)
		this.state = {
			skillsList  : {},
			displayOrder: [ "languages", "libraries", "tools" ]
		}
	}

	countSkills() {
		let skl = {}
		Object.keys(Pages).forEach(pk => {
			let sections = Pages[pk]["sections"]
			if (sections) {
				sections.forEach(s => {
					let items = s["items"]
					if (items) {
						items.forEach(i => {
							let chips = i["chips"]
							if (chips) {
								Object.keys(chips).forEach(ck => {
									if (this.state.displayOrder.includes(ck)) {
										if (!skl[ck]) skl[ck] = {}
										if (chips) {
											chips[ck].forEach((c: string) => {
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
			{this.state.skillsList && this.state.displayOrder.map((sk: React.Key) => {
				const skillList = this.state.skillsList[sk]
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

					return <DataCardResponsive itemProps={{ title: title }} key={sk}>
						<SmartChipBox text={skillCounts} defaultVariant="filled"/>
					</DataCardResponsive>
				}
			})}
		</PageSection>
	}
}

export default SkillsSection