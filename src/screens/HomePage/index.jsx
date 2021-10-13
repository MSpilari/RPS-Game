import { Link } from 'react-router-dom'
const HomePage = () => {
	return (
		<div>
			<header>
				<h1>Rock Paper Scissors</h1>
			</header>
			<main>
				<Link data-testid='original' to='/original'>
					Play Rock Paper Scissors
				</Link>
				<Link data-testid='bonus' to='/bonus'>
					Play Rock Paper Scissors Lizard Spock
				</Link>
			</main>
			<footer>
				<h6>Feito por MSpilari</h6>
			</footer>
		</div>
	)
}

export { HomePage }
