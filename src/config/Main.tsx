import { configureStore } from "@reduxjs/toolkit"
import cardReducer from "../reducers/selectedCard"
import mainConfig from "../data/main.json"

export const store = configureStore({
	reducer: {
		backdropCard: cardReducer
	}
})

// Infer the RootState type from the store for typed useSelector
export type RootState = ReturnType<typeof store.getState>

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

