import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded"

import React from "react"
import { CardListParams } from "../components/SectionCardList"
import DataAcademics from "../data/academics"
import DataBlog from "../data/blog"
import DataResume from "../data/resume"
import DataProjects from "../data/projects"
import DataSeminars from "../data/seminars"
import { AlertColor } from "@mui/material"

export interface Note {
	text: string,
	severity?: AlertColor
}

export interface Page {
	href: string,
	icon: React.ReactElement,
	content?: Array<CardListParams>,
	notes?: Array<Note>,
}

export const pages: { [key: string]: Page } = {
	"Home"     : {
		href: "/",
		icon: <HomeRounded/>
	},
	"Resume"   : {
		href   : "/resume",
		icon   : <SummarizeRounded/>,
		content: [ ...DataResume ]
	},
	"Projects" : {
		href   : "/projects",
		icon   : <CodeRounded/>,
		content: [ ...DataProjects ]
	},
	"Academics": {
		href   : "/academics",
		icon   : <SchoolRounded/>,
		content: [ ...DataAcademics ]
	},
	"Seminars" : {
		href   : "/seminars",
		icon   : <CampaignRoundedIcon/>,
		notes  : [
			{ text: "The UT Honors and Scholars Programs offer a variety of engagement opportunities to be involved and engaged, both inside and outside the classroom." },
			{
				text    : "These seminars inspire scholars to explore their academic interests through engaging and rewarding co-curricular experiences.",
				severity: "info"
			}
		],
		content: [ ...DataSeminars ]
	},
	"Blog"     : {
		href   : "/blog",
		icon   : <BookRounded/>,
	}
}

export const usePage = (title: string) => {
	const info = pages[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}