/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { Chip, ChipProps } from "@mui/material"
import * as React from "react"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined"
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined"
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined"
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded"
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import BiotechIcon from '@mui/icons-material/Biotech';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Theme from "../../config/Theme"

const mDate = [ "/", " - " ]
const mAchieve = [ "GPA", "Summa Cum Laude" ]
const mProg = [
	"Assembly", "C++", "C/C++", "C#", "Java", "Kotlin", "Python", "Ruby", "Swift", "TypeScript", "HTML", "CSS",
	"JavaScript", "PHP", "Bash", "CoffeeScript", "GoLang", "Haskell", "Perl", "Rust", "Scala", "Shell", "Visual Basic",
	"SQL"
]
const mLib = [
	"React.JS", "Angular", "Vue", "Node.JS", "Express", "Django", "Flask", "Matplotlib", "Pandas", "Numpy",
	"Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "JQuery", "Material-UI", "Redux", "JavaFX"
]
const mDB = [ "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite" ]
const mTool = [
	"Unix", "Linux", "Windows", "macOS", "Git & GitHub", "Git", "GitHub", "GitLab", "BitBucket", "Jira", "Jenkins",
	"Docker", "AWS", "Jupyter Notebook", "Maven", "Gradle", "WebView", "Cordova"
]
const mPosition = [ "President", "Secretary", "Manager" ]
const mResearch = [ "Research", "Publication" ]
const mTeach = [ "Teach", "Instruct" ]
const mMember = [ "Member", "Volunteer" ]
const mChapter = [ "Chapter", "Club" ]

function getType(text: string) {
	const tl = text.toLowerCase()
	if (mAchieve.some(m => tl.includes(m.toLowerCase()))) return "achieve"
	if (mDB.some(m => tl.includes(m.toLowerCase()))) return "db"
	if (mTool.some(m => tl.includes(m.toLowerCase()))) return "tool"
	if (mLib.some(m => tl.includes(m.toLowerCase()))) return "lib"
	if (mProg.some(m => tl.includes(m.toLowerCase()))) return "prog"
	if (mPosition.some(m => tl.includes(m.toLowerCase()))) return "position"
	if (mResearch.some(m => tl.includes(m.toLowerCase()))) return "research"
	if (mTeach.some(m => tl.includes(m.toLowerCase()))) return "teach"
	if (mMember.some(m => tl.includes(m.toLowerCase()))) return "member"
	if (mChapter.some(m => tl.includes(m.toLowerCase()))) return "chapter"
	if (mDate.some(m => tl.includes(m.toLowerCase()))) return "date"
	return "skill"
}

export interface SmartChipProps {
	text: string,
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
	defaultSize?: ChipProps["size"],
}

const SmartChip = (props: SmartChipProps) => {

	const spacingY = 0.3
	const spacingR = 0.5
	let type = getType(props.text)

	const getIcon = () => {
		if (type === "achieve") return <MilitaryTechOutlinedIcon/>
		if (type === "db") return <StorageOutlinedIcon/>
		if (type === "tool") return <SelectAllOutlinedIcon/>
		if (type === "lib") return <CollectionsBookmarkOutlinedIcon/>
		if (type === "prog") return <CodeOutlinedIcon/>
		if (type === "position") return <StarRateRoundedIcon/>
		if (type === "research") return <BiotechIcon/>
		if (type === "teach") return <AutoStoriesIcon/>
		if (type === "member") return <PeopleOutlineOutlinedIcon/>
		if (type === "chapter") return <HomeOutlinedIcon/>
		if (type === "date") return <CalendarMonthOutlinedIcon/>
		return undefined
	}

	const getColor = (): ChipProps["color"] => {
		if (type === "achieve") return "success"
		if (type === "db") return "success"
		if (type === "tool") return "secondary"
		if (type === "lib") return "info"
		if (type === "prog") return "primary"
		return props.defaultColor || "default"
	}

	const getVariant = (): ChipProps["variant"] => {
		if (type === "date") return "outlined"
		if (type === "achieve") return "filled"
		return props.defaultVariant || "outlined"
	}

	return <Chip label={props.text}
				 variant={getVariant()}
				 color={getColor()}
				 icon={getIcon()}
				 size={props.defaultSize || "medium"}
				 sx={{
					 my      : spacingY,
					 mr      : spacingR,
					 fontSize: Theme.card.chipFontSize,
					 height  : Theme.card.chipHeight
				 }}/>
}

export default SmartChip
