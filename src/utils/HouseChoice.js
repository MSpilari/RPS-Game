const HouseChoice = (min, max, gameMode) => {
	const alternativesRPS = ['Rock', 'Paper', 'Scissors']
	const alternativesRPSLS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

	const housePick = Math.floor(Math.random() * (max - min + 1) + min)

	return gameMode === '/original'
		? alternativesRPS[housePick]
		: alternativesRPSLS[housePick]
}

export { HouseChoice }
