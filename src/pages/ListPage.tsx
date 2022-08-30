import { FC, useEffect } from 'react'
import CharacterList from '../components/list/CharacterList'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getCharacterListWithOption } from '../store/actions/characterActions'

import classes from './ListPage.module.scss'

const ListPage: FC = () => {
	const dispatch = useAppDispatch()

	const { page } = useAppSelector((state) => state.character)

	useEffect(() => {
		if (!page) {
			dispatch(
				getCharacterListWithOption({
					page: 0,
				})
			)
		}
	}, [])

	return (
		<div className={classes.wrapper}>
			<CharacterList />
		</div>
	)
}

export default ListPage
