/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// https://www.schemecolor.com/gold-blue-color-combination.php
import { createTheme } from "@mui/material"
import themeConfig from "../data/theme.json"

declare module "@mui/material/styles" {
	// fix the type error when referencing the Theme object in your styled component
	interface Theme {
		transitionDuration: {
			topbar: number
			avatar: number
			page: number
			breadcrumb: number
			notes: number
			fab: number
			backdropCard: number
		};
		particles: {
			filter: string
		};
		avatar: {
			borderSize: string
			size: string
		};
		topbar: {
			opacity: number
			selectedFontWeight: string
			hiddenOpacity: number
			spacing: number
		}
		section: {
			titleVariant: string
			titleFontWeight: string
			itemSpacing: number
			verticalMargin: number
		}
		card: {
			elevation: number
			fontWeight: string
			iconColor: string
			spacing: number
			headerOpacity: number
			contentOpacity: number
			titleFontSize: number | string
			subheaderFontSize: number | string
			contentFontSize: number | string
			contentPaddingH: number | string
			contentPaddingV: number | string
			chipFontSize: number | string
			chipHeight: number | string
			paragraphSpacing: number | string
		}
	}

	// fix the type error when calling `createTheme()` with a custom theme option
	interface ThemeOptions {
		transitionDuration: {
			topbar: number
			avatar: number
			page: number
			breadcrumb: number
			notes: number
			fab: number
			backdropCard: number
		};
		particles: {
			filter: string
		};
		avatar: {
			borderSize: string
			size: string
		};
		topbar: {
			opacity: number
			selectedFontWeight: string
			hiddenOpacity: number
			spacing: number
		}
		section: {
			titleVariant: string
			titleFontWeight: string
			itemSpacing: number
			verticalMargin: number
		}
		card: {
			elevation: number
			fontWeight: string
			iconColor: string
			spacing: number
			headerOpacity: number
			contentOpacity: number
			titleFontSize: number | string
			subheaderFontSize: number | string
			contentFontSize: number | string
			contentPaddingH: number | string
			contentPaddingV: number | string
			chipFontSize: number | string
			chipHeight: number | string
			paragraphSpacing: number | string
		}
	}
}

const Theme = createTheme(themeConfig)
export default Theme