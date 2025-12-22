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
import Current from "../data/academics/Current.json"
import IntelligentSystems from "../data/academics/IntelligentSystems.json"
import Cybersecurity from "../data/academics/Cybersecurity.json"
import General from "../data/academics/General.json"
// Option 1: 4-Tier Pyramid
import ResearchOverview from "../data/academics-shared/ResearchOverview.json"
import GraduateML from "../data/academics-pyramid/GraduateML.json"
import GraduateVision from "../data/academics-pyramid/GraduateVision.json"
import GraduateSystems from "../data/academics-pyramid/GraduateSystems.json"
import GraduateMath from "../data/academics-pyramid/GraduateMath.json"
import GraduateInterdisciplinary from "../data/academics-pyramid/GraduateInterdisciplinary.json"
import FoundationalAdvanced from "../data/academics-pyramid/FoundationalAdvanced.json"
import FoundationalCybersecurity from "../data/academics-pyramid/FoundationalCybersecurity.json"
import FoundationalCore from "../data/academics-pyramid/FoundationalCore.json"
// Option 2: Research-First Domains
import IntelligentSystemsML from "../data/academics-domains/IntelligentSystemsML.json"
import VisionImaging from "../data/academics-domains/VisionImaging.json"
import SystemsArchitecture from "../data/academics-domains/SystemsArchitecture.json"
import CybersecurityDomains from "../data/academics-domains/Cybersecurity.json"
import MathTheory from "../data/academics-domains/MathTheory.json"
import Interdisciplinary from "../data/academics-domains/Interdisciplinary.json"
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
			IntelligentSystems, Cybersecurity, General
			// Current, IntelligentSystems, Cybersecurity, General
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
			ResearchOverview,
			GraduateML,
			GraduateVision,
			GraduateSystems,
			GraduateMath,
			GraduateInterdisciplinary,
			FoundationalAdvanced,
			FoundationalCybersecurity,
			FoundationalCore
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
			ResearchOverview,
			IntelligentSystemsML,
			VisionImaging,
			SystemsArchitecture,
			CybersecurityDomains,
			MathTheory,
			Interdisciplinary
		],
		hidden: true
	},
	"AcademicsMatrix": {
		href: "/academics-matrix",
		icon: "ic_academics",
		notes: [
			{
				text: "Option 4: Progressive Expertise Matrix - Shows skill development from foundational to advanced levels within each domain, demonstrating comprehensive growth trajectory.",
				severity: "info"
			}
		],
		sections: [
			ResearchOverview,
			IntelligentSystemsML,
			VisionImaging,
			SystemsArchitecture,
			CybersecurityDomains,
			MathTheory,
			Interdisciplinary
		],
		hidden: true
	},
}
