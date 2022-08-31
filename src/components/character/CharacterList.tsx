import { FC, useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { characterSlice } from '../../store/slices/characterSlice'
import { getCharacterListWithOption } from '../../store/actions/characterActions'

import CharacterListItem from './CharacterListItem'
import Loader from '../Loader'

import classes from './CharacterList.module.scss'

const CharacterList: FC = () => {
	const dispatch = useAppDispatch()

	const listWrapper = useRef<HTMLDivElement>(null)

	const [height, setHeight] = useState(200)
	const [endCharacters, setEndCharacters] = useState<boolean>(false)

	const { list, error, isLoading, filterSettings } = useAppSelector((state) => state.character)
	const { page } = filterSettings

	useEffect(() => {
		dispatch(characterSlice.actions.setPage(1))
		dispatch(getCharacterListWithOption({ ...filterSettings, page: 1 }))
	}, [filterSettings.gender, filterSettings.name, filterSettings.species, filterSettings.status])

	useEffect(() => {
		;(async () => {
			if (list.length) {
				const response = await dispatch(getCharacterListWithOption(filterSettings))

				setEndCharacters(!response)
			}
		})()
	}, [page])

	useEffect(() => {
		;(async () => {
			if (height < 100 && !isLoading && !endCharacters) {
				dispatch(characterSlice.actions.setPage(page + 1))
			}
		})()
	}, [height])

	const scrollHandler = (e: any) => {
		const height = e.target.scrollHeight - (e.target.scrollTop + window.innerHeight)
		setHeight(height)
	}

	useEffect(() => {
		if (listWrapper.current) {
			listWrapper.current.addEventListener('scroll', scrollHandler)
		}
		return () => {
			if (listWrapper.current) {
				listWrapper.current.removeEventListener('scroll', scrollHandler)
			}
		}
	}, [listWrapper.current])

	return (
		<div
			ref={listWrapper}
			className={classes.wrapper}
		>
			<div className={classes.inner}>
				{isLoading && !list.length && !error && <Loader />}
				{!isLoading && !list.length && error}
				{!isLoading &&
					list.length > 0 &&
					!error &&
					list.map((listItem) => {
						return (
							<CharacterListItem
								key={listItem.id}
								info={listItem}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default CharacterList
