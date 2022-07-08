import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const AchievementsLicensesCertifications: CardListParams = {
	title        : "Achievements, Licenses, & Certifications",
	layout       : SectionCardList,
	itemComponent: InfoCard,
	items        : [
		{
			"title"   : "From Data to Insights with Google Cloud Platform Specialization",
			"subtitle": "No expiration",
			"chips"   : "Awarded 08/2020",
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "Google Cloud Essentials Certificate",
			"subtitle": "No expiration",
			"chips"   : "Awarded 07/2020",
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "Certificate of Excellence for Tennessee Scholar",
			"subtitle": "No expiration",
			"chips"   : "Awarded 05/2018",
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "National Honor Society Medal for Most Volunteer Hours",
			"subtitle": "No expiration",
			"chips"   : "Awarded 05/2018",
			"avatar"  : <AccessAlarmIcon/>
		}
	]
}

export default AchievementsLicensesCertifications

