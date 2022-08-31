import axios from 'axios'
import { FC, useEffect, useState } from 'react'

import { useAppDispatch } from '../../hooks/redux'
import { characterSlice } from '../../store/slices/characterSlice'

import { ICharacter } from '../../types/ICharacter'
import { IEpisode } from '../../types/IEpisode'
import { ILocation } from '../../types/ILocation'

import Loader from '../Loader'

import classes from './CharacterInfo.module.scss'

interface CharacterInfoProps {
	className: string
	info: ICharacter
}

const CharacterInfo: FC<CharacterInfoProps> = ({ className, info }) => {
    const dispatch = useAppDispatch()

	const [isLoading, setIsLoading] = useState(false)
	const [episodeInfo, setEpisodeInfo] = useState<IEpisode | null>(null)
	const [locationInfo, setLocationInfo] = useState<ILocation | null>(null)
	const [otherCharacters, setOtherCharacters] = useState<ICharacter[]>([])

	const getRandomElementFromArray = (array: string[]) => {
		var rand = Math.floor(Math.random() * array.length)
		return array[rand]
	}

	const getOtherCharacter = async (urls: string[]) => {
		const charactersURL = [getRandomElementFromArray(urls), getRandomElementFromArray(urls)]
		const firstCharacter = axios.get(charactersURL[0])
		const secondCharacter = axios.get(charactersURL[1])

		Promise.all([firstCharacter, secondCharacter]).then((responses) => {
			if (responses[1].data.id !== responses[0].data.id) {
				setOtherCharacters([responses[0].data, responses[1].data])
			} else {
				setOtherCharacters([responses[0].data])
			}
		})
	}

	useEffect(() => {
		;(async () => {
			setIsLoading((prev) => true)
			setOtherCharacters([])
			const lastEpisodeURL = info.episode[info.episode.length - 1]

			await axios
				.get(lastEpisodeURL)
				.then((response) => {
					setEpisodeInfo(response.data)
					getOtherCharacter(response.data.characters)
				})
				.finally(() => {
					setIsLoading((prev) => false)
				})
		})()
	}, [info])

	useEffect(() => {
		;(async () => {
			setIsLoading((prev) => true)
			const lastLocationURL = info.location.url

			await axios
				.get(lastLocationURL)
				.then((response) => {
					setLocationInfo(response.data)
				})
				.finally(() => {
					setIsLoading((prev) => false)
				})
		})()
	}, [info])

	const closeHandler = () => {
        dispatch(characterSlice.actions.setActiveCharacter(null))
    }

	return (
		<div className={`${classes.wrapper} ${className ? className : ''}`}>
			<div className={classes.inner}>
				<svg
					fill='#000000'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 30 30'
                    onClick={closeHandler}
                    className={classes.close}
				>
					{' '}
					<path d='M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z' />
				</svg>

				{locationInfo && !isLoading ? (
					<>
						<div className={classes.item}>
							<div className={classes.itemTitle}>Имя:</div>
							<div className={classes.itemText}>{info.name}</div>
						</div>
						{episodeInfo && (
							<>
								<div className={classes.item}>
									<div className={classes.itemTitle}>
										Последний эпизод, в котром встречался персонаж:
									</div>
									<div className={classes.itemText}>
										Номер {episodeInfo.id} ({episodeInfo.episode})
									</div>
								</div>
								<div className={classes.item}>
									<div className={classes.itemTitle}>Наимонование эпизода:</div>
									<div className={classes.itemText}>{episodeInfo.name}</div>
								</div>
								<div className={classes.item}>
									<div className={classes.itemTitle}>Дата выхода эпизода:</div>
									<div className={classes.itemText}>{episodeInfo.air_date}</div>
								</div>
								{otherCharacters.length > 0 && (
									<div className={classes.item}>
										<div className={classes.itemTitle}>
											Некоторые персонажи, которые также встречались в
											последнем эпизоде:
										</div>
										<div className={classes.itemText}>
											{otherCharacters.map((character) => {
												return (
													<div
														key={`other-character-${character.id}`}
														className={classes.otherCharacter}
													>
														<img
															alt=''
															src={character.image}
														/>
														<span>{character.name}</span>
													</div>
												)
											})}
										</div>
									</div>
								)}
							</>
						)}
						<div className={classes.item}>
							<div className={classes.itemTitle}>
								Последняя локация, в котрой появлялся персонаж:
							</div>
							<div className={classes.itemText}>{info.location.name}</div>
						</div>
						{locationInfo && (
							<>
								<div className={classes.item}>
									<div className={classes.itemTitle}>
										Измерение, в котором находится данная локация:
									</div>
									<div className={classes.itemText}>{locationInfo.dimension}</div>
								</div>
							</>
						)}
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	)
}

export default CharacterInfo
