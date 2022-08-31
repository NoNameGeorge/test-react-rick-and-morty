import React, { FC, useRef } from 'react'

import { useAppSelector } from '../../hooks/redux'

import CharacterListItem from './CharacterListItem'

import classes from './CharacterList.module.scss'

const CharacterList: FC = () => {
	const listWrapper = useRef<HTMLDivElement>(null)

	const { list, error, isLoading } = useAppSelector((state) => state.character)

	return (
		<div
			ref={listWrapper}
			className={classes.wrapper}
		>
			<div className={classes.inner}>
				{list.length &&
					list.map((listItem) => {
						console.log(listItem)
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
