import axios from "axios";
import { AppDispatch } from "..";
import { IFilter } from "../../types/IFilter";
import { characterSlice } from "../slices/characterSlice";

const getStringSettings = (settings: IFilter): string => {
	const tempStorage: string[] = []

	if (settings.name) {
		tempStorage.push(`name=${settings.name}`)
	}

	let stringSettings = tempStorage.join('&')

	return stringSettings
}

export const getCharacterListWithOption = (settings: IFilter) => async (dispatch: AppDispatch) => {
	try {
		dispatch(characterSlice.actions.setLoading(true))

		const stringSettings = getStringSettings(settings)


		console.log(settings)
		console.log(stringSettings)


		// const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${settings.page}`)
		// console.log(response)


// 		localStorage.setItem('token', response.data.accessToken)
// 		dispatch(userSlice.actions.setAuth(true))
// 		dispatch(userSlice.actions.setUser(response.data.user))

		dispatch(characterSlice.actions.setLoading(false))

		return ''
	} catch (e: any) {
// 		dispatch(userSlice.actions.setLoading(false))
// 		dispatch(userSlice.actions.setError(e.response.data.message))
		return 'Error'
	}
}