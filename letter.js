class Letter {
    constructor(character) {
        this.letter = character;
        this.printLetter = "_";
    }
}

Letter.prototype.checkLetter = function(input) {
    if (this.letter === input) {   //if user input matches
        this.printLetter = this.letter; //reveal letter
    }
    return this.printLetter; //return printLetter
}

module.exports = Letter;
