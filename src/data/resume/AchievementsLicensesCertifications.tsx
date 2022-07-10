import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const AchievementsLicensesCertifications: PageSectionProps = {
	title  : "Achievements, Licenses, & Certifications",
	variant: "grid6",
	items  : [
		{
			"title"   : "From Data to Insights with Google Cloud Platform Specialization",
			"subtitle": "No expiration",
			"chips"   : {
				"headerChips": [ "Awarded 08/2020" ]
			},
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "Google Cloud Essentials Certificate",
			"subtitle": "No expiration",
			"chips"   : {
				"headerChips": [ "Awarded 07/2020" ]
			},
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "Tennessee Scholar (Certificate of Excellence)",
			"subtitle": "No expiration",
			"chips"   : {
				"headerChips": [ "Awarded 05/2018" ]
			},
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "NHS Medallion (Most Volunteer Hours)",
			"subtitle": "No expiration",
			"chips"   : {
				"headerChips": [ "Awarded 05/2018" ]
			},
			"avatar"  : <AccessAlarmIcon/>
		}
	]
}

export default AchievementsLicensesCertifications
