import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded"

import React from "react"
import DataAcademics from "../data/academics"
import DataResume from "../data/resume"
import DataProjects from "../data/projects"
import DataSeminars from "../data/seminars"
import { PageProps } from "../components/interfaces/PageProps"

export const pages: { [key: string]: PageProps } = {
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
		hidden : true
	}
}

export const usePage = (title: string) => {
	const info = pages[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}