/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded"

import React from "react"
import DataAcademics from "../data/academics"
import DataResume from "../data/resume"
import DataProjects from "../data/projects"
import DataSeminars from "../data/seminars"
import { PageProps } from "../components/interfaces/PageProps"
import Skills from "../components/Skills"
import Photos from "../components/Photos"

export const pages: { [key: string]: PageProps } = {
	"Home"     : {
		href: "/",
		icon: <HomeRounded/>
	},
	"Resume"   : {
		href    : "/resume",
		icon    : <SummarizeRounded/>,
		sections: [
			...DataResume, <Skills title="Skills" items={[]} key="skills"/>
		]
	},
	"Projects" : {
		href    : "/projects",
		icon    : <CodeRounded/>,
		sections: [ ...DataProjects ],
		hidden  : true
	},
	"Academics": {
		href    : "/academics",
		icon    : <SchoolRounded/>,
		sections: [
			...DataAcademics, <Skills title="Skills" items={[]} key="skills"/>
		]
	},
	"Seminars" : {
		href    : "/seminars",
		icon    : <CampaignRoundedIcon/>,
		notes   : [
			{ text: "The UT Honors and Scholars Programs offer a variety of engagement opportunities to be involved and engaged, both inside and outside the classroom." },
			{
				text    : "These seminars inspire scholars to explore their academic interests through engaging and rewarding co-curricular experiences.",
				severity: "info"
			}
		],
		sections: [ ...DataSeminars ]
	},
	"Blog"     : {
		href  : "/blog",
		icon  : <BookRounded/>,
		hidden: true
	},
	"Photos"     : {
		href  : "/photos",
		icon  : <BookRounded/>,
		hidden: true,
		sections: [ <Photos/> ],
		fullWidth: true
	}
}

export const usePage = (title: string) => {
	const info = pages[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}