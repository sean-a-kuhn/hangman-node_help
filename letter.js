class Letter {
    constructor(letter) {
        this.letter = letter;
        this.printLetter = "_";
    }
}

Letter.prototype.checkLetter = function(input) {
    if (this.letter === input) {   //if user input matches
        this.printLetter = letter; //reveal letter
    }
    return this.printLetter; //return printLetter
}

module.exports = Letter;
