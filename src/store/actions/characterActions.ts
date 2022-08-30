import { AppDispatch } from "..";


export const login = () => async (dispatch: AppDispatch) => {
	try {
// 		dispatch(userSlice.actions.setLoading(true))
// 		const response = await UserService.login(user)

// 		localStorage.setItem('token', response.data.accessToken)
// 		dispatch(userSlice.actions.setAuth(true))
// 		dispatch(userSlice.actions.setUser(response.data.user))
// 		dispatch(userSlice.actions.setLoading(false))

		return ''
	} catch (e: any) {
// 		dispatch(userSlice.actions.setLoading(false))
// 		dispatch(userSlice.actions.setError(e.response.data.message))
		return 'Error'
	}
}