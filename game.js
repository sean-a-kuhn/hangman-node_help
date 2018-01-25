const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');
const Answers = require('./answers.js');

const hintsArray = Answers.wordsToGuess.clues;
const wordsToGuessArray = Answers.wordsToGuess.words;

let currentWord = 0;
let numOfGuesses = 10;
let lettersGuessed = [];

function setGameDirection() {
    if (currentWord <= wordsToGuessArray.length) {
        renderGameWords(wordsToGuessArray[currentWord]);
    }
}

function renderGameWords(answer) {
    let item = new Word(answer);
    item.generatePuzzle();
    item.printPuzzle();
}

function startGame() {
    console.log('\n***  ***  Hangman: The Beatlemania Edition  ***  ***\n');
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Wanna play?',
            name: 'confirm',
            default: true
        }
    ]).then(function(answers) {
        if (answers.confirm) {
            console.log("Awesome! Let's play!");
            playGame();
        } else {
            console.log("I guess it's just too intimidating...");
        }
    });
}

function playGame() {
   setGameDirection();
}

startGame();