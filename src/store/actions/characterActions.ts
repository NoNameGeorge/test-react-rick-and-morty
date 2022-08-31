import axios from 'axios'
import { AppDispatch } from '..'
import { IFilter } from '../../types/IFilter'
import { characterSlice } from '../slices/characterSlice'

const getStringSettings = (settings: IFilter): string => {
	const tempStorage: string[] = []

	tempStorage.push(`page=${settings.page}`)

	if (settings.name) {
		tempStorage.push(`name=${settings.name}`)
	}

	settings.gender.forEach((item) => {
		if (item.value) {
			tempStorage.push(`gender=${item.name}`)
		}
	})

	settings.status.forEach((item) => {
		if (item.value) {
			tempStorage.push(`status=${item.name}`)
		}
	})

	settings.species.forEach((item) => {
		if (item.value) {
			tempStorage.push(`species=${item.name}`)
		}
	})

	let stringSettings = tempStorage.join('&')

	return stringSettings
}

export const getCharacterListWithOption = (settings: IFilter) => async (dispatch: AppDispatch) => {
	try {
		dispatch(characterSlice.actions.setLoading(true))

		const stringSettings = getStringSettings(settings)

		const response = await axios.get(
			`https://rickandmortyapi.com/api/character?${stringSettings}`
		)

		const list = response.data.results
		const hasNextPage = response.data.info.next

		if (!list.length) {
			throw new Error("Не найдено таких персонажей :'(")
		}

		if (settings.page === 1) {
			dispatch(characterSlice.actions.setCharacters(list))
		} else {
			dispatch(characterSlice.actions.addCharacters(list))
		}

		dispatch(characterSlice.actions.setLoading(false))

		return hasNextPage
	} catch (e: any) {
		dispatch(characterSlice.actions.setLoading(false))
		dispatch(characterSlice.actions.setCharacters([]))

		if (e.response.data && e.response.data.error === 'There is nothing here') {
			dispatch(characterSlice.actions.setError("Не найдено таких персонажей :'("))
			return 'Error'
		}

		dispatch(characterSlice.actions.setError(e.response.data.message))
		return 'Error'
	}
}