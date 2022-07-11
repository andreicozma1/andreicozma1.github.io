import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const ActivitiesSocieties: PageSectionProps = {
	title  : "Activities & Societies",
	variant: "timeline",
	items  : [
		{
			"title"   : "VolHacks",
			"subtitle": "UT's Yearly Hackathon Event",
			"chips"   : {
				"date"     : [ "04/2019 - Present" ],
				"positions": [
					"Operations Manager for Sponsorships (2019)", "President (2020-2021)"
				]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Pi Kappa Phi",
			"subtitle": "Social Fraternity on the UY campus",
			"chips"   : {
				"date"     : [ "04/2019 - Present" ],
				"positions": [
					"Chapter Secretary", "Housing Manager", "Website Developer"
				]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Chancellor's Honors Program",
			"subtitle": "UT principal honors program",
			"chips"   : {
				"date"     : [ "08/2018 - 05/2022" ],
				"positions": [
					"Member & Volunteer"
				]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "National Honor Society & Beta Club",
			"subtitle": "Highschool Honor Societies",
			"chips"   : {
				"date"     : [ "08/2016 - 05/2018" ],
				"positions": [
					"Initiated Member & Volunteer", "Awarded Medallion for Most Volunteer Hours"
				]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Computer Science & Robotics Clubs",
			"subtitle": "Highschool Clubs",
			"chips"   : {
				"date"     : [ "09/2014 - 05/2018" ],
				"positions": [
					"HackClub Chapter", "President, Organizer, and Tutor"
				]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "Spanish Club & Honor Society",
			"subtitle": "Highschool Honor Societies & Clubs",
			"chips"   : {
				"date"     : [ "08/2014 - 05/2018" ],
				"positions": [
					"Vice President", "Initiated Member & Volunteer"
				]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}, {
			"title"   : "American Red Cross Volunteer",
			"subtitle": "Middle Tennessee Chapter",
			"chips"   : {
				"date"     : [ "08/2014 - Present" ],
				"positions": [ "Member", "Volunteer" ]
			},
			"avatar"  : <WorkspacesOutlinedIcon/>
		}
	]
}

export default ActivitiesSocieties

