import axios from 'axios'
import { FC, useEffect, useState } from 'react'

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
	const [isLoading, setIsLoading] = useState(false)
	const [episodeInfo, setEpisodeInfo] = useState<IEpisode | null>(null)
	const [locationInfo, setLocationInfo] = useState<ILocation | null>(null)

	useEffect(() => {
		;(async () => {
			setIsLoading((prev) => true)
			const lastEpisodeURL = info.episode[info.episode.length - 1]

			await axios
				.get(lastEpisodeURL)
				.then((response) => {
					setEpisodeInfo(response.data)
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

	console.log(info)
	console.log(episodeInfo)

	return (
		<div className={`${classes.wrapper} ${className ? className : ''}`}>
			<div className={classes.inner}>
				{episodeInfo && locationInfo && !isLoading ? (
					<>
						<div className={classes.item}>
							<div className={classes.itemTitle}>Имя:</div>
							<div className={classes.itemText}>{info.name}</div>
						</div>
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
						<div className={classes.item}>
							<div className={classes.itemTitle}>
								Последняя локация, в котрой появлялся персонаж:
							</div>
							<div className={classes.itemText}>{info.location.name}</div>
						</div>
						<div className={classes.item}>
							<div className={classes.itemTitle}>
								Измерение, в котором находится данная локация:
							</div>
							<div className={classes.itemText}>{locationInfo.dimension}</div>
						</div>
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	)
}

export default CharacterInfo
