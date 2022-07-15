/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { createTheme } from "@mui/material"

const ThemeConfig = createTheme({
	spacing           : 8,
	palette           : {
		primary   : {
			main: "#002233"
		},
		secondary : {
			main : "#e9bd6c",
			light: "#ebd5ac",
			dark : "#e7a52c"
		},
		background: {
			default: "#ededed"
		}
	},
	transitionDuration: {
		topbar    : 500,
		avatar    : 1000,
		breadcrumb: 1500,
		page      : 250,
		notes     : 1000
	},
	avatar            : {
		borderSize: "0.5rem",
		size      : "28vh"
	},
	topbar            : {
		opacity           : 0.99,
		selectedFontWeight: "bold",
		hiddenOpacity     : 0.5,
		spacing           : 1
	},
	particles         : {
		filter: "blur(1vmax)"
	},
	section           : {
		titleVariant   : "h5",
		titleFontWeight: "medium",
		itemSpacing    : 1,
		verticalMargin : 1.5
	},
	card              : {
		elevation        : 4,
		fontWeight       : "medium",
		iconColor        : "primary",
		spacing          : 1,
		headerOpacity    : 0.99,
		contentOpacity   : 0.6,
		titleFontSize    : "0.95rem",
		subheaderFontSize: "0.85rem",
		contentFontSize  : "0.9rem",
		contentPaddingH  : "0.9rem",
		contentPaddingV  : "0.75rem",
		chipFontSize     : "0.8rem",
		chipHeight       : "1.7rem",
		paragraphSpacing : "0.35rem"
	}
})

export default ThemeConfig