
'use strict';

var userAnswer1 = prompt("Are you a student at ASAC? \n*The answer should be either (Yes or No).");
while (userAnswer1.toLowerCase() != 'yes' && userAnswer1.toLowerCase() != 'no' && userAnswer1 != '') {
    alert("The answer entered is unrealistic, please enter again.");
    var userAnswer1 = prompt("Are you a student at ASAC? \n*The answer should be either (Yes or No).");
}
var userAnswer2 = prompt("Have you learned any programming language pefore? \n*The answer should be either (Yes or No).");
while (userAnswer2.toLowerCase() != 'yes' && userAnswer2.toLowerCase() != 'no' && userAnswer2 != '') {
    alert("The answer entered is unrealistic, please enter again.");
    var userAnswer2 = prompt("Have you learned any programming language pefore? \n*The answer should be either (Yes or No).");
}
var userAnswer3 = prompt("Do you interested in learning programming? \n*The answer should be either (Yes or No).");
while (userAnswer3.toLowerCase() != 'yes' && userAnswer3.toLowerCase() != 'no' && userAnswer3 != '') {
    alert("The answer entered is unrealistic, please enter again.");
    var userAnswer3 = prompt("Do you interested in learning programming? \n*The answer should be either (Yes or No).");
}
var userAnswers = [userAnswer1, userAnswer2, userAnswer3];


function checkAnswers(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '') { 
            array.push('invalid');
        } else { 
            array.push(arr[i]);
    }
    }
    return array;
}

var array = checkAnswers(userAnswers);
console.log(array);

function printAnswers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log(printAnswers(array));




    