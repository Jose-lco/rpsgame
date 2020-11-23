function game(userGuess) {
    let computerChoices = ['rock', 'paper', 'scissors'];

    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return gameHelper(userGuess, computerGuess);
}
function gameHelper(userGuess, computerGuess) {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    if ((userGuess === "rock" && computerGuess === "scissors") ||
        (userGuess === "scissors" && computerGuess === "paper") ||
        (userGuess === "paper" && computerGuess === "rock")) {
        wins++;
    } else if (userGuess === computerGuess) {
        ties++;
    } else {
        losses++;
    }
    return {wins, losses, ties};
}
module.exports = {game, gameHelper};