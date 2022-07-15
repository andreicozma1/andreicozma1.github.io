/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded"

import React from "react"
import { PageComponentsProps } from "../components/props/PageComponentsProps"
import About from "./data/resume/About"
import Education from "./data/resume/Education"
import WorkExperience from "./data/resume/WorkExperience"
import AchievementsLicensesCertifications from "./data/resume/AchievementsLicensesCertifications"
import ActivitiesSocieties from "./data/resume/ActivitiesSocieties"
import Current from "./data/academics/Current"
import IntelligentSystems from "./data/academics/IntelligentSystems"
import Cybersecurity from "./data/academics/Cybersecurity"
import General from "./data/academics/General"
import Spring2022 from "./data/seminars/Spring2022"
import Fall2021 from "./data/seminars/Fall2021"
import Spring2021 from "./data/seminars/Spring2021"
import Fall2020 from "./data/seminars/Fall2020"
import DataTemplate from "./data/DataTemplate"

export const pagesConfig: { [key: string]: PageComponentsProps } = {
	"Home"     : {
		href: "/",
		icon: <HomeRounded/>
	},
	"Resume"   : {
		href: "/resume",
		icon: <SummarizeRounded/>,
		data: [
			About, Education, WorkExperience, AchievementsLicensesCertifications, ActivitiesSocieties
		]
	},
	"Projects" : {
		href  : "/projects",
		icon  : <CodeRounded/>,
		data  : [ DataTemplate ],
		hidden: true
	},
	"Academics": {
		href: "/academics",
		icon: <SchoolRounded/>,
		data: [
			Current, IntelligentSystems, Cybersecurity, General
		]
	},
	"Seminars" : {
		href : "/seminars",
		icon : <CampaignRoundedIcon/>,
		notes: [
			{ text: "The UT Honors and Scholars Programs offer a variety of engagement opportunities to be involved and engaged, both inside and outside the classroom." },
			{
				text    : "These seminars inspire scholars to explore their academic interests through engaging and rewarding co-curricular experiences.",
				severity: "info"
			}
		],
		data : [
			Spring2022, Fall2021, Spring2021, Fall2020
		]
	},
	"Blog"     : {
		href  : "/blog",
		icon  : <BookRounded/>,
		hidden: true
	},
	"Photos"   : {
		href: "/photos",
		icon: <BookRounded/>
	}
}

export const usePage = (title: string) => {
	const info = pagesConfig[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}