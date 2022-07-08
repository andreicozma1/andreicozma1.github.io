import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"
import CampaignIcon from '@mui/icons-material/Campaign';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';

import React from "react"
import { CardListParams } from "../components/SectionCardList"
import DataAcademics from "../data/academics"
import DataBlog from "../data/blog"
import DataResume from "../data/resume"
import DataProjects from "../data/projects"
import DataSeminars from "../data/seminars"

export interface Page {
	href: string,
	icon: React.ReactElement,
	content?: Array<CardListParams>,
	note?: string,
	noteSeverity?: "info" | "success" | "warning" | "error"
}

export const pages: { [key: string]: Page } = {
	"Home": {
		href: "/",
		icon: <HomeRounded/>,
	},
	"Resume": {
		href: "/resume",
		icon: <SummarizeRounded/>,
		content: [ ...DataResume ]
	},
	"Projects": {
		href: "/projects",
		icon: <CodeRounded/>,
		content: [ ...DataProjects ]
	},
	"Academics": {
		href: "/academics",
		icon: <SchoolRounded/>,
		content: [ ...DataAcademics ]
	},
	"Seminars": {
		href: "/seminars",
		icon: <CampaignRoundedIcon/>,
		note: "I am a Software Developer with a strong passion for learning, improving, and creating.",
		noteSeverity: "info",
		content: [ ...DataSeminars ]
	},
	"Blog": {
		href: "/blog",
		icon: <BookRounded/>,
		content: [ ...DataBlog ]
	}
}

export const usePage = (title: string) => {
	const info = pages[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}