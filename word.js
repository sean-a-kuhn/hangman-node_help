const Letter = require('./letter.js');

class Word {
    constructor(answer) {
      this.name = answer;
      this.lettersArray = [];// array of Letter objects
   }
}

Word.prototype.generatePuzzle = function() {
   for (var i = 0; i < this.name.length; i++) {
      var letter = new Letter(this.name[i]); // create Letter object
      // if letter value is a space, assign " " to printLetter property
      if (letter.letter === " ") {
         letter.printLetter = " ";
      }
      this.lettersArray.push(letter); // add Letter object to array
   }
}

// function to print puzzle to console
Word.prototype.printPuzzle = function() {
   var currentPuzzle = "";
   for (var i=0; i<this.lettersArray.length; i++) {
      currentPuzzle = currentPuzzle + this.lettersArray[i].printLetter + " ";
   }
   console.log(currentPuzzle);
}

/*
Word.prototype.updateWord = function(guess) {
   var word; // var to build puzzle string and return to function call
   
   for (let i = 0; i < this.name.length; i++) {
       if (this.name.charAt(i) == " ") {
          word = word + "  ";
          continue;
       }
      word = word + this.lettersArray[i].checkLetter(guess) + " ";        
    }
    return word;
}
*/
module.exports = Word;
