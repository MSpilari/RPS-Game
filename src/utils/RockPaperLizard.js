const RockPaperLizardLogic = (playerChoice, houseChoice) => {
	if (
		(playerChoice === 'Rock' && houseChoice === 'Scissors') ||
		(playerChoice === 'Rock' && houseChoice === 'Lizard') ||
		(playerChoice === 'Paper' && houseChoice === 'Rock') ||
		(playerChoice === 'Paper' && houseChoice === 'Spock') ||
		(playerChoice === 'Scissors' && houseChoice === 'Paper') ||
		(playerChoice === 'Scissors' && houseChoice === 'Lizard') ||
		(playerChoice === 'Lizard' && houseChoice === 'Paper') ||
		(playerChoice === 'Lizard' && houseChoice === 'Spock') ||
		(playerChoice === 'Spock' && houseChoice === 'Scissors') ||
		(playerChoice === 'Spock' && houseChoice === 'Rock')
	)
		return 'Player Wins'
	else if (playerChoice === houseChoice) return 'Draw'
	else return 'House Wins'
}

export { RockPaperLizardLogic }
