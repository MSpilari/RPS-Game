import { RockPaperScissorLogic } from '../utils/RockPaperScissors'

describe('Testing the logic of the method RockPaperScissor', () => {
	it('Should win the player, when he chooses Rock and House choose Scissor', () => {
		const playerChoose = 'Rock'
		const houseChoose = 'Scissor'

		const result = RockPaperScissorLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Scissor and House choose Paper', () => {
		const playerChoose = 'Scissor'
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

	it('Should win the House, when he chooses Scissor and Player choose Paper', () => {
		const result = RockPaperScissorLogic('Paper', 'Scissor')

		expect(result).toBe('House Wins')
	})

	it('Should win the House, when he chooses Rock and Player choose Scissor', () => {
		const result = RockPaperScissorLogic('Scissor', 'Rock')

		expect(result).toBe('House Wins')
	})
})
