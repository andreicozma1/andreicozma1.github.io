/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import CodeIcon from "@mui/icons-material/Code"
import * as React from "react"

const FloatingActionButtonConfig = [
	{
		icon: <LinkedInIcon/>,
		name: "LinkedIn",
		url : "https://www.linkedin.com/in/andreicozma1/"
	}, {
		icon: <GitHubIcon/>,
		name: "GitHub",
		url : "https://github.com/andreicozma1"
	}, {
		icon: <CodeIcon/>,
		name: "Source",
		url : "https://github.com/andreicozma1/andreicozma1.github.io/tree/source"
	}
]

export default FloatingActionButtonConfig