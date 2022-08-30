import { FC } from 'react'

import { Filter } from '../components/filter'

import classes from './MainPage.module.scss'

const MainPage: FC = () => {
	return (
		<div className={classes.wrapper}>
			<Filter />
		</div>
	)
}

export default MainPage
