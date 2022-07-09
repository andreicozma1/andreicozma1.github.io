import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import PageSection from "../../components/page/PageSection"
import InfoCard from "../../components/cards/InfoCard"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const AchievementsLicensesCertifications: PageSectionProps = {
	title        : "Achievements, Licenses, & Certifications",
	layout       : PageSection,
	itemComponent: InfoCard,
	items        : [
		{
			"title"   : "From Data to Insights with Google Cloud Platform Specialization",
			"subtitle": "No expiration",
			"headerChips"   : "Awarded 08/2020",
			"avatar"  : <AccessAlarmIcon/>,
		}, {
			"title"   : "Google Cloud Essentials Certificate",
			"subtitle": "No expiration",
			"headerChips"   : "Awarded 07/2020",
			"avatar"  : <AccessAlarmIcon/>,
		}, {
			"title"   : "Certificate of Excellence for Tennessee Scholar",
			"subtitle": "No expiration",
			"headerChips"   : "Awarded 05/2018",
			"avatar"  : <AccessAlarmIcon/>,
		}, {
			"title"   : "National Honor Society Medal for Most Volunteer Hours",
			"subtitle": "No expiration",
			"headerChips"   : "Awarded 05/2018",
			"avatar"  : <AccessAlarmIcon/>,
		}
	]
}

export default AchievementsLicensesCertifications

