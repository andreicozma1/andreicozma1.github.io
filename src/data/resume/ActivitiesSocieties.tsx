import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const ActivitiesSocieties: CardListParams = {
	title: "Activities & Societies", layout: SectionCardList, itemComponent: InfoCard, items: [
		{
			"title": "VolHacks",
			"subtitle": "President, Sponsors Operations, Organizer",
			"chips": "04/2019 - Present",
			"avatar": <AccessAlarmIcon/>
		}, {
			"title": "Pi Kappa Phi - Alpha Sigma Chapter",
			"subtitle": "Chapter Secretary, Housing Mgr., Web Developer",
			"chips": "04/2019 - Present",
			"avatar": <AccessAlarmIcon/>
		}, {
			"title": "Chancellor's Honors Program",
			"subtitle": "Active Member & Volunteer",
			"chips": "08/2018 - 05/2022",
			"avatar": <AccessAlarmIcon/>
		}, {
			"title": "National Honor Society & Beta Club Honor Society",
			"subtitle": "Awarded Medal for Most Volunteer Hours",
			"chips": "08/2016 - 05/2018",
			"avatar": <AccessAlarmIcon/>
		}, {
			"title": "Computer Science & Robotics Clubs",
			"subtitle": "President, Organizer, and Tutor",
			"chips": "09/2014 - 05/2018",
			"avatar": <AccessAlarmIcon/>
		}, {
			"title": "Spanish Club & Honor Society",
			"subtitle": "Vice President",
			"chips": "08/2014 - 05/2018",
			"avatar": <AccessAlarmIcon/>
		}, {
			"title": "American Red Cross Volunteer",
			"subtitle": "Middle Tennessee Chapter Member & Volunteer",
			"avatar": <AccessAlarmIcon/>
		}
	]
}

export default ActivitiesSocieties

