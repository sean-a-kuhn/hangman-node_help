const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');
const Answers = require('./answers.js');


const wordsToGuessArray = Answers.wordsToGuess.words;
const hintsArray = Answers.wordsToGuess.clues;

let item;
let currentWord = 0;
let numOfGuesses = 10;
let lettersGuessedArray = [];

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
            console.log("\nAwesome! Let's play!\n");
            playGame();
        } else {
            console.log("\nI guess it's just too intimidating...\n");
        }
    });
}

function playGame() {
    if (numOfGuesses === 10) {
        setGameDirection();
        promptUserInput();
    }
}


function setGameDirection() {
    if (currentWord < wordsToGuessArray.length) {
        renderGameWords(wordsToGuessArray[currentWord]);
    }
}

function renderGameWords(answer) {
    item = new Word(answer);
    item.generatePuzzle();
    item.printPuzzle();
}

function promptUserInput() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Can you guess what this song title is?',
            name: 'letterInput'
        }
    ]).then(function(answers) {
        let letterGuessed = answers.letterInput.toLowerCase();
        lettersGuessedArray.push(letterGuessed);
        item.checkValue(letterGuessed);
        if (item.checkValue(letterGuessed)) {
            console.log('Correct!');
        } else {
            console.log('Wrong!');
            numOfGuesses--;
            console.log(`Guesses remaining: ${numOfGuesses}/10`);
        }
        item.printPuzzle();
        promptUserInput();
    })
}

startGame();