import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ListPage, MainPage } from './pages'

const App: FC = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<MainPage />}
			/>
			<Route
				path='/list'
				element={<ListPage />}
			/>
		</Routes>
	)
}

export default App
