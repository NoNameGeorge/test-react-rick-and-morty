import axios from "axios";
import { AppDispatch } from "..";
import { IRequest } from "../../types/IRequest";
import { characterSlice } from "../slices/characterSlice";

export const getCharacterListWithOption = (settings: IRequest) => async (dispatch: AppDispatch) => {
	try {
		dispatch(characterSlice.actions.setLoading(true))
		const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${settings.page}`)

		

		console.log(response)

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