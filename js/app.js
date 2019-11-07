'use strict';
//console.log('Proof of life');

var userName = prompt('Hello, what is your name?');
alert('Welcome to my site ' + userName + '!');
alert('Lets play a guessing game and learn more about me! ');

//Question One
var gameScore = 0;
function questionOneFunction() {

  var questionOne = prompt('Did I attend the University of Oklahoma?').toUpperCase();
  if (questionOne === 'Y' || questionOne === 'YES') {
    //console.log('Correct! Boomer Sooner!');
    alert('Correct! Boomer Sooner!');
    gameScore++;
  } else {
    alert('Incorrect!');
  }
}

questionOneFunction();

//Question Two
function questionTwoFunction() {
  var questionTwo = prompt('Do I have 5 children?').toUpperCase();
  if (questionTwo === 'N' || questionTwo === 'NO') {
    //console.log('Correct! Whew! That would be a lot of children!');
    alert('Correct! Whew, that would be A LOT of children!');
    gameScore++;
  } else {
    alert('Incorrect!');
  }
}

questionTwoFunction();

//Question Three
function questionThreeFunction() {
  var questionThree = prompt('Did I grow up in Germany?').toUpperCase();
  if (questionThree === 'Y' || questionThree === 'YES') {
    //console.log('Correct! Guten Tag!');
    alert('Correct! Guten Tag!');
    gameScore++;
  } else {
    alert('Incorrect!');
  }
}

questionThreeFunction();

//Question Four
function questionFourFunction() {
  var questionFour = prompt('Am I the oldest child?').toUpperCase();
  if (questionFour === 'Y' || questionFour === 'YES') {
    //console.log('Correct! I am the BOSS!);
    alert('Correct! I am the BOSS!');
    gameScore++;
  } else {
    alert('Incorrect!');
  }
}

questionFourFunction();

//Question Five
function questionFiveFunction() {
  var questionFive = prompt('Do I speak Korean?').toUpperCase();
  if (questionFive === 'N' || questionFive === 'NO') {
    //console.log('Correct! Sadly, I do not.');
    alert('Correct! Sadly, I do not.');
    gameScore++;
  } else {
    alert('Incorrect!');
  }
}

questionFiveFunction();

//Question Six
function questionSixFunction() {

  var questionSixAnswer = 25;
  var attempts = 0;
  var attemptsAllowed = 4;
  
  while(attempts < attemptsAllowed) {
    var questionSix = prompt(userName + ', I am looking for a number between 1-50, can you guess my number? You have ' + (attemptsAllowed - attempts) + ' attempts!');
    if (questionSix > questionSixAnswer) {
      console.log('Too high! Try again!');
      alert('Too high! Try again!');
      attempts++;
    } else if (questionSix < questionSixAnswer) {
      console.log('Too low!Try again!');
      alert('Too low! Try again!');
      attempts++;
    } else {
      alert('Wow, you guessed my number!');
      console.log('Wow, you guessed my number!');
      gameScore++;
      break;
    }
  }
  if (attempts === attemptsAllowed) {
    console.log('Sorry, you have reached your max attempts! This answer is ' + questionSixAnswer + '.');
    alert('Sorry, you have reached your max attempts! This answer is ' + questionSixAnswer + '.');
  }
}

questionSixFunction();

//Question Seven
function questionSevenFunction() {
  var 

}

questionSevenFunction();

alert('Thank you for playing my game, ' + userName + '! \nYour final score is ' + gameScore + '!');
