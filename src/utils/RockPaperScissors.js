const RockPaperScissorLogic = (playerChoice, houseChoice) => {
	if (
		(playerChoice === 'Rock' && houseChoice === 'Scissor') ||
		(playerChoice === 'Paper' && houseChoice === 'Rock') ||
		(playerChoice === 'Scissor' && houseChoice === 'Paper')
	)
		return 'Player Wins'
	else if (playerChoice === houseChoice) return 'Draw'
	else return 'House Wins'
}

export { RockPaperScissorLogic }
