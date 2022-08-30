import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// import './sass/style.scss'

import App from './App'

const container = document.querySelector('.main-wrapper') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(
	<Router>
        <App />
	</Router>
)
