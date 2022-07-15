import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
import * as React from "react"
import { PageSectionProps } from "../../../components/props/PageComponentsProps"

const ActivitiesSocieties: PageSectionProps = {
	title  : "Activities & Societies",
	variant: "timeline",
	items  : [
		{
			"title"   : "VolHacks",
			"subtitle": "UTK's Yearly Hackathon Event",
			"chips"   : {
				"date"     : [ "04/2019 - Present" ],
				"positions": [
					"Operations Manager for Sponsorships (2019)", "President (2020-2021)"
				]
			},
			"avatar"  : "code"
		}, {
			"title"   : "Pi Kappa Phi",
			"subtitle": "Greek Letter & Social Fraternity on campus",
			"chips"   : {
				"date"        : [ "04/2019 - Present" ],
				"positions"   : [
					"Chapter Secretary", "Housing Manager", "Website Developer"
				],
				"contentChips": [
					"Alpha Sigma Chapter"
				]
			},
			"avatar"  : "group"
		}, {
			"title"   : "Chancellor's Honors Program",
			"subtitle": "UTK's Principal Honors Program",
			"chips"   : {
				"date"     : [ "08/2018 - 05/2022" ],
				"positions": [
					"Member & Volunteer"
				]
			},
			"avatar"  : "workspace_premium"
		}, {
			"title"   : "Computer Science & Robotics Clubs",
			"subtitle": "Club Leadership Experiences",
			"chips"   : {
				"date"        : [ "09/2014 - 05/2018" ],
				"positions"   : [
					"President", "Organizer", "Tutor"
				],
				"contentChips": [
					"HackClub Chapter"
				]
			},
			"avatar"  : "computer"
		}, {
			"title"   : "National Honor Society & Beta Club",
			"subtitle": "Honor Societies Experiences",
			"chips"   : {
				"date"     : [ "08/2016 - 05/2018" ],
				"positions": [
					"Initiated Member", "Volunteer", "Awarded Medallion for Most Volunteer Hours"
				]
			},
			"avatar"  : "workspace_premium"
		} //, {
		// 	"title"   : "Spanish Club & Honor Society",
		// 	"subtitle": "Highschool Honor Societies & Clubs",
		// 	"chips"   : {
		// 		"date"     : [ "08/2014 - 05/2018" ],
		// 		"positions": [
		// 			"Vice President", "Initiated Member & Volunteer"
		// 		]
		// 	},
		// 	"avatar"  : "menu"
		// },
		// {
		// 	"title"   : "American Red Cross Volunteer",
		// 	"subtitle": "Middle Tennessee Chapter",
		// 	"chips"   : {
		// 		"date"     : [ "08/2014 - Present" ],
		// 		"positions": [ "Member", "Volunteer" ]
		// 	},
		// 	"avatar"  : "menu"
		// }
	]
}

export default ActivitiesSocieties

