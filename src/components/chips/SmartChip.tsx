import { Chip, ChipProps } from "@mui/material"
import * as React from "react"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import { SmartChipProps } from "../interfaces/SmartChipProps"

const SmartChip = ({
					   text,
					   defaultColor,
					   defaultVariant
				   }: SmartChipProps) => {
	const spacing = 0.5

	const getIcon = (text: string) => {
		const dateMatch = [ "/", " - " ]
		if (dateMatch.every(m => text.includes(m))) {
			return <CalendarMonthOutlinedIcon/>
		}
		if (text.includes("GPA")) {
			return <MilitaryTechOutlinedIcon/>
		}
		if (text.includes("Asynchronous")) {
			return <LanguageOutlinedIcon/>
		}
		return undefined
	}

	const getColor = (text: string): ChipProps["color"] => {
		const mAchieve = [ "GPA", "Summa Cum Laude"]
		if (mAchieve.some(m => text.toLowerCase().includes(m.toLowerCase()))) {
			return "success"
		}

		const mProg = [
			"Assembly", "C/C++", "C#", "Java", "Kotlin", "Python", "Ruby", "Swift", "TypeScript", "HTML", "CSS", "JavaScript",
			"PHP", "Bash", "CoffeeScript", "GoLang", "Haskell", "Lua", "Perl", "Rust", "Scala", "Shell", "Visual Basic",
		]
		if (mProg.some(m => text.toLowerCase().includes(m.toLowerCase()))) {
			return "primary"
		}

		const mLib = [
			"React", "Angular", "Vue", "Node", "Express", "Django", "Flask", "AWS", "Matplotlib", "Pandas",
			"Numpy", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "JQuery"
		]
		if (mLib.some(m => text.toLowerCase().includes(m.toLowerCase()))) {
			return "primary"
		}

		const mDB = [ "SQL", "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite"]
		if (mDB.some(m => text.toLowerCase().includes(m.toLowerCase()))) {
			return "info"
		}

		const mTool = [ "Linux", "Windows", "macOS", "Git", "GitHub", "GitLab", "Jira", "BitBucket", "Jenkins", "Docker"]
		if (mTool.some(m => text.toLowerCase().includes(m.toLowerCase()))) {
			return "secondary"
		}

		return defaultColor || "default"
	}

	const getVariant = (text: string): ChipProps["variant"] => {
		const mAchieve = [ "GPA", "Summa Cum Laude"]
		if (mAchieve.some(m => text.toLowerCase().includes(m.toLowerCase()))) {
			return "filled"
		}
		const dateMatch = [ "/", " - " ]
		if (dateMatch.every(m => text.includes(m))) {
			return "outlined"
		}

		return defaultVariant || "outlined"
	}

	return <Chip label={text}
				 variant={getVariant(text)}
				 color={getColor(text)}
				 icon={getIcon(text)}
				 sx={{
					 my: spacing,
					 mx: spacing
				 }}/>
}

export default SmartChip