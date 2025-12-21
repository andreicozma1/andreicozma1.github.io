import {
	BookRounded, Camera, CampaignRounded, CodeRounded, GitHub, HomeRounded, LinkedIn, SchoolRounded, SummarizeRounded
} from "@mui/icons-material"
import React from "react"

export const Icons: Record<string, React.ReactElement> = {
	"ic_home"     : <HomeRounded/>,
	"ic_resume"   : <SummarizeRounded/>,
	"ic_projects" : <CodeRounded/>,
	"ic_academics": <SchoolRounded/>,
	"ic_seminars" : <CampaignRounded/>,
	"ic_blog"     : <BookRounded/>,
	"ic_photos"   : <Camera/>,
	"ic_linkedin" : <LinkedIn/>,
	"ic_github"   : <GitHub/>,
	"ic_source"   : <CodeRounded/>
}