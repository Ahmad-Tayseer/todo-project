

var userName = prompt("Enter your name.");
console.log(userName);

var userGender = prompt("Enter your gender. \n*The answer should be either (male or female).");
console.log(userGender);

var userAge = prompt("Enter your age.");
console.log(userAge);

while (userAge <= 0) {
    alert("The age entered is unrealistic, please enter again.");
    var userAge = prompt("Enter your age.");
    console.log(userAge);
}

var userAnswer = confirm("Do you want to skip welcoming message?")

if (userAnswer == false) { 
    if (userGender.toLowerCase() == "male") {
        alert("Welcome to our site Mr " + userName); 
    } else if (userGender.toLowerCase() == "female") {
        alert("Welcome to our site Mrs " + userName);
    } else { 
    alert("Welcome to our site " + userName);
    }
}


