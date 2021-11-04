const RockPaperLizardLogic = (playerChoice, houseChoice) => {
	if (
		(playerChoice === 'Rock' && houseChoice === 'Scissors') ||
		(playerChoice === 'Paper' && houseChoice === 'Rock') ||
		(playerChoice === 'Scissors' && houseChoice === 'Paper')
	)
		return 'Player Wins'
	else if (playerChoice === houseChoice) return 'Draw'
	else return 'House Wins'
}

export { RockPaperLizardLogic }
