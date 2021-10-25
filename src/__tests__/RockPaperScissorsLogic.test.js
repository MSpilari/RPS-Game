import { RockPaperScissorLogic } from '../utils/RockPaperScissors'

describe('Testing the logic of the method RockPaperScissor', () => {
	it('Should win the player, when he chooses Rock and House choose Scissors', () => {
		const playerChoose = 'Rock'
		const houseChoose = 'Scissors'

		const result = RockPaperScissorLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Scissors and House choose Paper', () => {
		const playerChoose = 'Scissors'
		const houseChoose = 'Paper'

		const result = RockPaperScissorLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Paper and House choose Rock', () => {
		const playerChoose = 'Paper'
		const houseChoose = 'Rock'

		const result = RockPaperScissorLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should draw the game, when both choose the same option', () => {
		expect(RockPaperScissorLogic('Rock', 'Rock')).toBe('Draw')
		expect(RockPaperScissorLogic('Paper', 'Paper')).toBe('Draw')
		expect(RockPaperScissorLogic('Scissor', 'Scissor')).toBe('Draw')
	})

	it('Should win the House, when he chooses Paper and Player choose Rock', () => {
		const result = RockPaperScissorLogic('Rock', 'Paper')

		expect(result).toBe('House Wins')
	})

	it('Should win the House, when he chooses Scissors and Player choose Paper', () => {
		const result = RockPaperScissorLogic('Paper', 'Scissors')

		expect(result).toBe('House Wins')
	})

	it('Should win the House, when he chooses Rock and Player choose Scissors', () => {
		const result = RockPaperScissorLogic('Scissors', 'Rock')

		expect(result).toBe('House Wins')
	})
})
