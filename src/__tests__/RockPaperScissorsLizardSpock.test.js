import { RockPaperLizardLogic } from '../utils/RockPaperLizard'

describe('Testing the logic of the method RockPaperScissor', () => {
	it('Should win the player, when he chooses Rock and House choose Scissors', () => {
		const playerChoose = 'Rock'
		const houseChoose = 'Scissors'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Rock and House choose Lizard', () => {
		const playerChoose = 'Rock'
		const houseChoose = 'Lizard'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Scissors and House choose Paper', () => {
		const playerChoose = 'Scissors'
		const houseChoose = 'Paper'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Scissors and House choose Lizard', () => {
		const playerChoose = 'Scissors'
		const houseChoose = 'Lizard'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Paper and House choose Rock', () => {
		const playerChoose = 'Paper'
		const houseChoose = 'Rock'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Paper and House choose Spock', () => {
		const playerChoose = 'Paper'
		const houseChoose = 'Spock'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Lizard and House choose Paper', () => {
		const playerChoose = 'Lizard'
		const houseChoose = 'Paper'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Lizard and House choose Spock', () => {
		const playerChoose = 'Lizard'
		const houseChoose = 'Spock'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Spock and House choose Scissors', () => {
		const playerChoose = 'Spock'
		const houseChoose = 'Scissors'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should win the player, when he chooses Spock and House choose Rock', () => {
		const playerChoose = 'Spock'
		const houseChoose = 'Rock'

		const result = RockPaperLizardLogic(playerChoose, houseChoose)

		expect(result).toBe('Player Wins')
	})

	it('Should draw the game, when both choose the same option', () => {
		expect(RockPaperLizardLogic('Rock', 'Rock')).toBe('Draw')
		expect(RockPaperLizardLogic('Paper', 'Paper')).toBe('Draw')
		expect(RockPaperLizardLogic('Scissor', 'Scissor')).toBe('Draw')
		expect(RockPaperLizardLogic('Lizard', 'Lizard')).toBe('Draw')
		expect(RockPaperLizardLogic('Spock', 'Spock')).toBe('Draw')
	})

	it('Should win the House, when he chooses Paper and Player choose Rock', () => {
		const result = RockPaperLizardLogic('Rock', 'Paper')

		expect(result).toBe('House Wins')
	})

	it('Should win the House, when he chooses Paper and Player choose Spock', () => {
		const result = RockPaperLizardLogic('Spock', 'Paper')

		expect(result).toBe('House Wins')
	})

	it('Should win the House, when he chooses Scissors and Player choose Paper', () => {
		const result = RockPaperLizardLogic('Paper', 'Scissors')

		expect(result).toBe('House Wins')
	})

	it('Should win the House, when he chooses Rock and Player choose Scissors', () => {
		const result = RockPaperLizardLogic('Scissors', 'Rock')

		expect(result).toBe('House Wins')
	})
})
