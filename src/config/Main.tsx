import { configureStore } from "@reduxjs/toolkit"
import cardReducer from "../reducers/selectedCard"
import mainConfig from "../data/main.json"

export const store = configureStore({
	reducer: {
		backdropCard: cardReducer
	}
})

export interface MainConfigProps {
	title: string,
	avatarHeader: {
		src: string, href: string,
	},
	avatarHome: {
		src: string, href: string,
	}
}

const Main: MainConfigProps = { ...mainConfig }
export default Main

