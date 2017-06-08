'use strict';

console.log('Loaded app.js');
var userName = prompt('Type in your name');
// for every question there are three variables: null, yes, no
function promptYesOrNo(message) {
  var answer = prompt(message);
  if (answer === null){
    return null;
  }
  answer = answer.toLowerCase();
  if (answer === 'y' || answer === 'yes') {
    return true;
  }
  if (answer === 'n' || answer === 'no') {
    return false;
  }
}
function promptUntilYesOrNo(message, asklimit){
}
if (userName === null){
  alert('If you don\'t tell me your name, I will not know how to address you');
  prompt(userName);
}else{
  alert('Hi,' + ' ' + userName);
  console.log('Hi' + ' ' + userName);
}
var answers = ['n','y','N','Y','No','Yes','NO','YES','no',' yes'];
//this is hust putting the first question into a function//
function firstQuestion(){
  var firstQuestion = prompt('Do you employ 20 year olds?');
  if (firstQuestion === null){
  }else if(firstQuestion){
  }else{
  }
}

var secondQuestion = prompt('Do your employees live in cedar rapids?');
if (secondQuestion){
}else if(secondQuestion){
}else{
}
var thirdQuestion = prompt('Do you guys work in teams?');
if(thirdQuestion){
}else if(thirdQuestion){
}else{
}
var fourthQuestion = prompt('Do you hire employees with no programming work history?');
if (fourthQuestion){
}else if(fourthQuestion){
}else{
}
var fifthQuestion = prompt('Do you offer internships?');
if (fifthQuestion){
}else if(fifthQuestion){
}else{
}

//use listor matrix to store expected answers
// write if else in a function or loop
//console log prints to console not browser
//could use a do while loop to prompt user imput and then use that to continue in loop
//poke user answer back into page using git id
//for every question a variable to hold a value and value
