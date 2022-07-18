import { createSlice } from "@reduxjs/toolkit"

export const selectedCard = createSlice({
	name: "selectedCard", initialState: null, reducers: {
		setCardData: (state, action) => {
			return action.payload
		}
	}
})

export const { setCardData } = selectedCard.actions

export default selectedCard.reducer