import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getCharacterListWithOption } from '../store/actions/characterActions'

import { Filter } from '../components/filter'
import CharacterList from '../components/list/CharacterList'

import classes from './ListPage.module.scss'

const ListPage: FC = () => {
	const dispatch = useAppDispatch()

	const { filterSettings: settgins } = useAppSelector((state) => state.character)

	useEffect(() => {
		dispatch(getCharacterListWithOption(settgins))
	}, [settgins.gender, settgins.name, settgins.species, settgins.status])

	return (
		<div className={classes.wrapper}>
			<Filter isFixed />
			<CharacterList />
		</div>
	)
}

export default ListPage
