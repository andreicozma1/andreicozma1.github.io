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
		if (text.includes("GPA")) {
			return "secondary"
		}
		const mProg = [
			"Assembly", "C/C++", "C#", "Java", "Python", "Ruby", "Swift", "TypeScript", "HTML", "CSS", "JavaScript",
			"PHP", "Bash", "CoffeeScript", "GoLang", "Haskell", "Lua", "Perl", "Rust", "Scala", "Shell", "Visual Basic",
		]
		if (mProg.some(m => text.includes(m))) {
			return "primary"
		}

		const mLib = [
			"React", "Angular", "Vue", "Node", "Express", "Django", "Flask", "Docker", "AWS", "Matplotlib", "Pandas",
			"Numpy", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "JQuery"
		]

		if (mLib.some(m => text.includes(m))) {
			return "secondary"
		}

		const mDB = [ "SQL", "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "Firebase" ]
		if (mDB.some(m => text.includes(m))) {
			return "success"
		}

		const mTool = [ "Git", "GitHub", "GitLab", "Jira", "BitBucket", "Jenkins" ]
		if (mTool.some(m => text.includes(m))) {
			return "info"
		}

		return defaultColor || "default"
	}

	const getVariant = (text: string): ChipProps["variant"] => {
		if (text.includes("GPA")) {
			return "filled"
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