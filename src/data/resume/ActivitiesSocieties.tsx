import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import InfoCard from "../../components/cards/InfoCard"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"
import PageSectionTimeline from "../../components/page/PageSectionTimeline"

const ActivitiesSocieties: PageSectionProps = {
	title        : "Activities & Societies",
	layout       : PageSectionTimeline,
	itemComponent: InfoCard,
	items        : [
		{
			"title"       : "VolHacks",
			"subtitle"    : "University of Tennessee's Yearly Hackathon Event",
			"headerChips" : [
				"Operations Manager for Sponsorships (2019)", "President (2020-2021)"
			],
			"contentChips": "04/2019 - Present",
			"avatar"      : <AccessAlarmIcon/>
		}, {
			"title"       : "Pi Kappa Phi",
			"subtitle"    : "Social Fraternity on the University of Tennessee campus",
			"headerChips" : [
				"Chapter Secretary", "Housing Manager", "Website Developer"
			],
			"contentChips": "04/2019 - Present",
			"avatar"      : <AccessAlarmIcon/>
		}, {
			"title"       : "Chancellor's Honors Program",
			"subtitle"    : "University of Tennessee's principal honors program",
			"headerChips" : [
				"Member & Volunteer"
			],
			"contentChips": "08/2018 - 05/2022",
			"avatar"      : <AccessAlarmIcon/>
		}, {
			"title"       : "National Honor Society & Beta Club",
			"subtitle"    : "Highschool Honor Societies",
			"headerChips" : [
				"Initiated Member & Volunteer", "Awarded Medal for Most Volunteer Hours"
			],
			"contentChips": "08/2016 - 05/2018",
			"avatar"      : <AccessAlarmIcon/>
		}, {
			"title"       : "Computer Science & Robotics Clubs",
			"subtitle"    : "President, Organizer, and Tutor",
			"headerChips" : [
				"HackClub Chapter", "President, Organizer, and Tutor"
			],
			"contentChips": "09/2014 - 05/2018",
			"avatar"      : <AccessAlarmIcon/>
		}, {
			"title"       : "Spanish Club & Honor Society",
			"subtitle"    : "Highschool Honor Societies & Clubs",
			"headerChips" : [
				"Vice President", "Initiated Member & Volunteer"
			],
			"contentChips": "08/2014 - 05/2018",
			"avatar"      : <AccessAlarmIcon/>
		}, {
			"title"       : "American Red Cross Volunteer",
			"headerChips" : [ "Member", "Volunteer" ],
			"contentChips": "08/2014 - Present",
			"content"     : "Middle Tennessee Chapter",
			"avatar"      : <AccessAlarmIcon/>
		}
	]
}

export default ActivitiesSocieties

