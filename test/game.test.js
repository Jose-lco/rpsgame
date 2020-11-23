const { test, expect } = require('@jest/globals');
const rps = require('../game');
test("creates player object", () => {
    const player = rps.game("rock");
    expect(typeof(player)).toBe("object");
})
test("user guesses rock and computer chooses scissors", () => {
    let game = rps.gameHelper("rock", "scissors");
    expect(game.wins).toBe(1);
})
test("user guesses scissors and computer chooses paper", () => {
    let game = rps.gameHelper("scissors", "paper");
    expect(game.wins).toBe(1);
})
test("user guesses paper and computer chooses rock", () => {
    let game = rps.gameHelper("paper", "rock");
    expect(game.wins).toBe(1);
})
test("user guesses rock and computer chooses rock", () => {
    let game = rps.gameHelper("rock", "rock");
    expect(game.ties).toBe(1);
})