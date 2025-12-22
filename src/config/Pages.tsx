/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import React from "react"
import About from "../data/resume/About.json"
import Education from "../data/resume/Education.json"
import WorkExperience from "../data/resume/WorkExperience.json"
import AchievementsLicensesCertifications from "../data/resume/AchievementsLicensesCertifications.json"
import ActivitiesSocieties from "../data/resume/ActivitiesSocieties.json"
import IntelligentSystems from "../data/academics/IntelligentSystems"
import GraduateCore from "../data/academics/GraduateCore"
import GraduateOther from "../data/academics/GraduateOther"
import Mathematics from "../data/academics/Mathematics"
import Cybersecurity from "../data/academics/Cybersecurity"
import General from "../data/academics/General"
// Option 1: 4-Tier Pyramid
import GraduateML from "../data/academics-pyramid/GraduateML"
import GraduateVision from "../data/academics-pyramid/GraduateVision"
import GraduateSystems from "../data/academics-pyramid/GraduateSystems"
import GraduateMath from "../data/academics-pyramid/GraduateMath"
import GraduateSpecialized from "../data/academics-pyramid/GraduateSpecialized"
import FoundationalAdvanced from "../data/academics-pyramid/FoundationalAdvanced"
import FoundationalCybersecurity from "../data/academics-pyramid/FoundationalCybersecurity"
import FoundationalCore from "../data/academics-pyramid/FoundationalCore"
import FoundationalMath from "../data/academics-pyramid/FoundationalMath"
// Option 2: Research-First Domains
import IntelligentSystemsML from "../data/academics-domains/IntelligentSystemsML"
import VisionImaging from "../data/academics-domains/VisionImaging"
import SystemsArchitecture from "../data/academics-domains/SystemsArchitecture"
import CybersecurityDomains from "../data/academics-domains/Cybersecurity"
import MathTheory from "../data/academics-domains/MathTheory"
import Interdisciplinary from "../data/academics-domains/Interdisciplinary"
import Spring2022 from "../data/seminars/Spring2022.json"
import Fall2021 from "../data/seminars/Fall2021.json"
import Spring2021 from "../data/seminars/Spring2021.json"
import Fall2020 from "../data/seminars/Fall2020.json"
import DataTemplate from "../data/DataTemplate.json"
import { TemplatePageProps } from "../components/TemplatedDataProps"

export const Pages: { [key: string]: TemplatePageProps } = {
	"Home"     : {
		href: "/",
		icon: "ic_home"
	},
	"Resume"   : {
		href    : "/resume",
		icon    : "ic_resume",
		sections: [
			About, Education, WorkExperience, AchievementsLicensesCertifications, ActivitiesSocieties
		]
	},
	"Projects" : {
		href    : "/projects",
		icon    : "ic_projects",
		sections: [ DataTemplate ],
		hidden  : true
	},
	"Academics": {
		href    : "/academics",
		icon    : "ic_academics",
		sections: [
			IntelligentSystems,
			GraduateCore,
			GraduateOther,
			Mathematics,
			Cybersecurity,
			General
		]
	},
	"Seminars" : {
		href    : "/seminars",
		icon    : "ic_seminars",
		notes   : [
			{ text: "The UT Honors and Scholars Programs offer a variety of engagement opportunities to be involved and engaged, both inside and outside the classroom." },
			{
				text    : "These seminars inspire scholars to explore their academic interests through engaging and rewarding co-curricular experiences.",
				severity: "info"
			}
		],
		sections: [
			Spring2022, Fall2021, Spring2021, Fall2020
		],
		hidden: true
	},
	"Blog"     : {
		href  : "/blog",
		icon  : "ic_blog",
		hidden: true
	},
	"Photos"   : {
		href: "/photos",
		icon: "ic_photos",
		hidden: true
	},
	"Labs"   : {
		href: "/labs",
		icon: "ic_photos",
		hidden: true
	},
	"AcademicsPyramid": {
		href: "/academics-pyramid",
		icon: "ic_academics",
		notes: [
			{
				text: "Option 1: 4-Tier Pyramid - Hierarchical structure with research at the apex, graduate competencies, foundational expertise, and skills.",
				severity: "info"
			}
		],
		sections: [
			GraduateML,
			GraduateVision,
			GraduateSystems,
			GraduateMath,
			GraduateSpecialized,
			FoundationalAdvanced,
			FoundationalCybersecurity,
			FoundationalCore,
			FoundationalMath
		],
		hidden: true
	},
	"AcademicsDomains": {
		href: "/academics-domains",
		icon: "ic_academics",
		notes: [
			{
				text: "Option 2: Research-First Domain Expertise - Organized by thematic areas with research credentials prominently featured.",
				severity: "info"
			}
		],
		sections: [
			IntelligentSystemsML,
			VisionImaging,
			SystemsArchitecture,
			CybersecurityDomains,
			MathTheory,
			Interdisciplinary
		],
		hidden: true
	}
}
