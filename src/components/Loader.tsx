import { FC } from 'react'

import classes from './Loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={classes.wrapper}>
			<span></span>
		</div>
	)
}

export default Loader
