function Hangman(word) {
  this.wrongLetters = [];
  this.countErrors = 6;
  this.guessedString = '_________';

  this.guess = function (letter) {
    if (word.indexOf(letter) === -1) {
      this.countErrors -= 1;
      this.wrongLetters.push(letter);
      console.log(`wrong letter, errors left ${this.countErrors} | ${this.wrongLetters}`);
      return this;
    }
    const wordArray = this.guessedString.split('');
    for (let i = 0; i <= word.length; i += 1) {
      if ((word[i] === letter)) {
        wordArray[i] = letter;
      }
    }
    this.guessedString = wordArray.join('');
    console.log();

    return this;
  };

  this.getGuessedString = function () {
    return this.guessedString;
  };

  this.getErrorsLeft = function () {
    return this.countErrors;
  };

  this.getWrongSymbols = function () {
    return this.wrongLetters;
  };

  this.getStatus = function () {
    return `${this.guessedString} | errors left ${this.countErrors}`;
  };

  this.startAgain = function () {
    this.wrongLetters = [];
    this.countErrors = 6;
    this.guessedString = '_________';
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
