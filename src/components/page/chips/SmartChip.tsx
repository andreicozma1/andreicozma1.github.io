import { Chip, ChipProps } from "@mui/material"
import * as React from "react"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import { SmartChipProps } from "../../interfaces/SmartChipProps"
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined"
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined"
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded"
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"

const SmartChip = ({
					   text,
					   defaultColor,
					   defaultVariant
				   }: SmartChipProps) => {
	const spacing = 0.5
	const mDate = [ "/", " - " ]
	const mAchieve = [ "GPA", "Summa Cum Laude" ]
	const mProg = [
		"Assembly", "C++", "C/C++", "C#", "Java", "Kotlin", "Python", "Ruby", "Swift", "TypeScript", "HTML", "CSS",
		"JavaScript", "PHP", "Bash", "CoffeeScript", "GoLang", "Haskell", "Perl", "Rust", "Scala", "Shell",
		"Visual Basic"
	]
	const mLib = [
		"React", "Angular", "Vue", "Node", "Express", "Django", "Flask", "Matplotlib", "Pandas", "Numpy",
		"Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "JQuery", "Material-UI", "Redux"
	]
	const mDB = [ "SQL", "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite" ]
	const mTool = [
		"Linux", "Windows", "macOS", "Git", "GitHub", "GitLab", "Jira", "BitBucket", "Jenkins", "Docker", "AWS"
	]
	const mPosition = [ "President", "Secretary", "Manager" ]
	const mMember = [ "Member", "Volunteer" ]
	const mChapter = [ "Chapter", "Club" ]

	const getIcon = (text: string) => {
		if (mAchieve.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <MilitaryTechOutlinedIcon/>
		if (mProg.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <CodeOutlinedIcon/>
		if (mLib.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <CollectionsBookmarkOutlinedIcon/>
		if (mDB.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <StorageOutlinedIcon/>
		if (mTool.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <SelectAllOutlinedIcon/>
		if (mPosition.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <StarRateRoundedIcon/>
		if (mMember.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <PeopleOutlineOutlinedIcon/>
		if (mChapter.some(m => text.toLowerCase().includes(m.toLowerCase()))) return <HomeOutlinedIcon/>
		if (mDate.some(m => text.includes(m))) return <CalendarMonthOutlinedIcon/>
		if (text.includes("Asynchronous")) return <LanguageOutlinedIcon/>
		return undefined
	}

	const getColor = (text: string): ChipProps["color"] => {
		if (mAchieve.some(m => text.toLowerCase().includes(m.toLowerCase()))) return "success"
		if (mProg.some(m => text.toLowerCase().includes(m.toLowerCase()))) return "primary"
		if (mLib.some(m => text.toLowerCase().includes(m.toLowerCase()))) return "info"
		if (mDB.some(m => text.toLowerCase().includes(m.toLowerCase()))) return "success"
		if (mTool.some(m => text.toLowerCase().includes(m.toLowerCase()))) return "secondary"
		return defaultColor || "default"
	}

	const getVariant = (text: string): ChipProps["variant"] => {
		if (mDate.every(m => text.includes(m))) return "outlined"
		if (mAchieve.some(m => text.toLowerCase().includes(m.toLowerCase()))) return "filled"
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