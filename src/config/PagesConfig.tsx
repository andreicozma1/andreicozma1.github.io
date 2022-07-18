/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import React from "react"
import { PageProps } from "../components/props/PageComponentsProps"
import About from "./data/resume/About.json"
import Education from "./data/resume/Education.json"
import WorkExperience from "./data/resume/WorkExperience.json"
import AchievementsLicensesCertifications from "./data/resume/AchievementsLicensesCertifications.json"
import ActivitiesSocieties from "./data/resume/ActivitiesSocieties.json"
import Current from "./data/academics/Current.json"
import IntelligentSystems from "./data/academics/IntelligentSystems.json"
import Cybersecurity from "./data/academics/Cybersecurity.json"
import General from "./data/academics/General.json"
import Spring2022 from "./data/seminars/Spring2022.json"
import Fall2021 from "./data/seminars/Fall2021.json"
import Spring2021 from "./data/seminars/Spring2021.json"
import Fall2020 from "./data/seminars/Fall2020.json"
import DataTemplate from "./data/DataTemplate.json"

export const pagesConfig: { [key: string]: PageProps } = {
	"Home": {
		href: "/", icon: "im_home"
	}, "Resume": {
		href: "/resume", icon: "im_resume", sections: [
			About, Education, WorkExperience, AchievementsLicensesCertifications, ActivitiesSocieties
		]
	}, "Projects": {
		href: "/projects", icon: "im_projects", sections: [ DataTemplate ], hidden: true
	}, "Academics": {
		href: "/academics", icon: "im_academics", sections: [
			Current, IntelligentSystems, Cybersecurity, General
		]
	}, "Seminars": {
		href: "/seminars", icon: "im_seminars", notes: [
			{ text: "The UT Honors and Scholars Programs offer a variety of engagement opportunities to be involved and engaged, both inside and outside the classroom." },
			{
				text: "These seminars inspire scholars to explore their academic interests through engaging and rewarding co-curricular experiences.", severity: "info"
			}
		], sections: [
			Spring2022, Fall2021, Spring2021, Fall2020
		]
	}, "Blog": {
		href: "/blog", icon: "im_blog", hidden: true
	}, "Photos": {
		href: "/photos", icon: "im_photos"
	}
}

export const usePage = (title: string) => {
	const info = pagesConfig[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}