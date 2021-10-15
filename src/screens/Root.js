import { Switch, Route } from 'react-router-dom'

import { HomePage } from './HomePage'
import { RockPaperScissorsLizard } from './RockPaperLizard'
import { RockPaperScissors } from './RockPaperScissors'

const ScreensRoots = () => {
	return (
		<Switch>
			<Route path='/' exact component={HomePage} />
			<Route path='/original' exact component={RockPaperScissors} />
			<Route path='/bonus' exact component={RockPaperScissorsLizard} />
		</Switch>
	)
}

export { ScreensRoots }
