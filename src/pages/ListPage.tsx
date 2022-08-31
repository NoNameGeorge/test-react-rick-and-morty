import { FC } from 'react'

import { useAppSelector } from '../hooks/redux'

import { CharacterInfo, CharacterList } from '../components/character'
import { Filter } from '../components/filter'

import classes from './ListPage.module.scss'

const ListPage: FC = () => {
	const { activeCharacter } = useAppSelector((state) => state.character)

	return (
		<div className={classes.wrapper}>
			<Filter isFixed />
			<CharacterList />
			{activeCharacter && (
				<CharacterInfo
					info={activeCharacter}
					className={classes.moreInfo}
				/>
			)}
		</div>
	)
}

export default ListPage
