import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"

import React from "react"
import { CardListParams } from "../components/SectionCardList"
import DataAcademics from "../data/academics"
import DataBlog from "../data/blog"
import DataHome from "../data/home"
import DataResume from "../data/resume"
import DataProjects from "../data/projects"
import DataSeminars from "../data/seminars"

export interface Page {
	href: string,
	icon: React.ReactElement,
	content?: Array<CardListParams>
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
		icon: <SchoolRounded/>,
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