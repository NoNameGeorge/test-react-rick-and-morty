import { FC } from 'react'

import { useAppDispatch } from '../../hooks/redux'
import { characterSlice } from '../../store/slices/characterSlice'
import { ICharacter } from '../../types/ICharacter'

import classes from './CharacterListItem.module.scss'

interface CharacterListItemProps {
	info: ICharacter
}

const CharacterListItem: FC<CharacterListItemProps> = ({ info }) => {
	const dispatch = useAppDispatch()

	const { name, image, species, status, gender } = info

	const handleClick = () => {
		dispatch(characterSlice.actions.setActiveCharacter(info))
	}

	return (
		<div
			className={classes.wrapper}
			onClick={() => handleClick()}
		>
			<img
				alt=''
				src={image}
				className={classes.image}
			/>
			<div className={classes.infoWrapper}>
				<div>
					<span>Имя: </span>
					{name}
				</div>
				<div>
					<span>Статус: </span>
					{status}
				</div>
				<div>
					<span>Пол: </span>
					{gender}
				</div>
				<div>
					<span>Вид: </span>
					{species}
				</div>
			</div>
		</div>
	)
}

export default CharacterListItem
