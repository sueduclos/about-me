'use strict';
//console.log('Proof of life');

var userName = prompt('Hello, what is your name?');
alert('Welcome to my site ' + userName + '!');
alert('Lets play a guessing game and learn more about me! ');

//Question One
var questionOne = prompt('Did I attend the University of Oklahoma?').toUpperCase();
if (questionOne === 'Y' || questionOne === 'YES') {
  //console.log('Correct! Boomer Sooner!');
  alert('Correct! Boomer Sooner!');
} else {
  alert('Incorrect!');
}

//Question Two
var questionTwo = prompt('Do I have 5 children?').toUpperCase();
if (questionTwo === 'N' || questionTwo === 'NO') {
  //console.log('Correct! Whew! That would be a lot of children!');
  alert('Correct! Whew, that would be A LOT of children!');
} else {
  alert('Incorrect!');
}

//Question Three
var questionThree = prompt('Did I grow up in Germany?').toUpperCase();
if (questionThree === 'Y' || questionThree === 'YES') {
  //console.log('Correct! Guten Tag!');
  alert('Correct! Guten Tag!');
} else {
  alert('Incorrect!');
}

//Question Four
var questionFour = prompt('')

//Question Five

//Question Six

//Question Seven

alert('Thank you for playing my game ' + userName);