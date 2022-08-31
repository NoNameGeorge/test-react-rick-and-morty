import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import FilterInput from './FilterInput'
import FilterByStatus from './FilterByStatus'
import FilterByGender from './FilterByGender'
import FilterBySpecies from './FilterBySpecies'

import classes from './Filter.module.scss'

interface FilterProps {
	isFixed?: boolean
}

const Filter: FC<FilterProps> = ({ isFixed }) => {
	const navigate = useNavigate()
	const locate = useLocation()

	const handleClick = () => {
		if (locate.pathname === '/') navigate('/list')
	}

	return (
		<div className={`${classes.wrapper} ${isFixed ? classes.fixed : ''}`}>
			<div className={classes.inner}>
				{/* <h1 className={classes.title}>
					Найдите своего любимого героя "The Rick and Morty":
				</h1> */}
				<div className={classes.filterWrapper}>
					<FilterInput />
					<button
						className={classes.button}
						onClick={() => handleClick()}
					>
						Найти
					</button>
				</div>
				<FilterByStatus />
				<FilterByGender />
				<FilterBySpecies />
			</div>
		</div>
	)
}

export default Filter
