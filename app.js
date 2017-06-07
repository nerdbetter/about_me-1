'use strict';

console.log('Loaded app.js');
var userName = prompt('Type in your name');

if (userName === null)
{
  alert('If you don\'t tell me your name, I will not know how to address you');
  prompt(userName);
}
else
{
  alert('Hi,' + ' ' + userName);
}
var answers = ['n','y','N','Y','No','Yes','NO','YES','no',' yes'];
//use listor matrix to store expected answers
// write if else in a function or loop
//console log prints to console not browser
//could use a do while loop to prompt user imput and then use that to continue in loop
//poke user answer back into page using git id
//for every question a variable to hold a value and value
