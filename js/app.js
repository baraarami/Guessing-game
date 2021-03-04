'use strict';
let counter = 0;

function answerQuestions_yes_or_no(Q_sting, userAnswer, trueAnswer) {
    let score = 0;
    while (!(userAnswer === 'yes') && !(userAnswer === 'no') && !(userAnswer === 'y') && !(userAnswer === 'n')) {

        alert("NO , i wanna answer's by yes/no , y/n \n OKAY!!")
        userAnswer = prompt(Q_sting).toLowerCase()
            // console.log(userAnswer)
    }
    if (userAnswer === trueAnswer) {
        score++;
        console.log("function answer  " + userAnswer, score)
        return score;
    } else return score;

}


function Question_Trial(trial, Question, userAnswer, trueanswer, numberofQuestion) {
    let score = 0;
    if (numberofQuestion === 6) console.log("answer   " + userAnswer + "    " + trueanswer)
    while (trial) {
        /////////////////////////////////for the question 6 
        if (numberofQuestion == 6)
            if (userAnswer == trueanswer) {
                alert('yah you got it ' + trueanswer);
                return ++score;
                break;
            }
            //////////////////////for the question 7
        if (numberofQuestion == 7)
            if (userAnswer == trueanswer[0] || userAnswer === trueanswer[1] || userAnswer === trueanswer[2] || userAnswer === trueanswer[3]) {
                alert('yah you got it  ' + userAnswer);
                return ++score;
                break;
            }
            /////////////////////////////    
        if (score === 0 && trial != 0) {
            alert("try again u have left  " + --trial)
            if (numberofQuestion == 7) alert("it places in United Arab Emarat ")
            userAnswer = prompt(Question)

        }
        if (trial === 1) {
            alert("GOOD LUCK!!! \n your don't have any Trial left")
            alert("the answer  : " + trueanswer)
            return score;
        }
    }
}




//////////////////Question00
let UserInput = prompt("Can you tell me your name , please !");
while (!UserInput) {
    UserInput = prompt('please provide a name !');
}
alert("welcome to our site " + UserInput);
alert("I will ask you a few quastions and your answers must be just yes or no !");

////////Qustion 01 
let Question01 = "Can you guess the creater of this websit !? "
let nameGuess = prompt(Question01).toLowerCase();
counter += answerQuestions_yes_or_no(Question01, nameGuess, 'y');
console.log("counter1 ", counter)



///////////Question 02
let Question02 = "Can you gess the age of the creater !?"
let ageGuess = prompt(Question02).toLowerCase();
counter += answerQuestions_yes_or_no(Question02, ageGuess, 'y');
console.log("counter2 ", counter)


////////////////////////////Question03
let Question03 = "Did you think the creater studed somthing related to computer and IT in general !?"
let majorGuess = prompt(Question03).toLowerCase();
counter += answerQuestions_yes_or_no(Question03, majorGuess, 'y');
console.log("counter3 ", counter)



/////////////////////////////////////Question04
let Question04 = "Did you think the creater love shawerma ?!"
let statusGuess = prompt(Question04).toLowerCase();
counter += answerQuestions_yes_or_no(Question04, statusGuess, 'y');
console.log("counter4 ", counter)

///////////////////////////Question05
let Question05 = "Would you advise to continue what the creator doing?! "
let confermGuess = prompt(Question05).toLowerCase();
counter += answerQuestions_yes_or_no(Question05, confermGuess, 'y');
console.log("counter5= ", counter)

//////////////////////////////////////////////

/////////////////////////////Question06
let salary = 550;
let Question06 = "try to guess the salary of the wedsite creater ! ** Hent: it is between 300 and 600 "
let guessSalary = prompt(Question06);
counter += Question_Trial(4, Question06, guessSalary, salary, 6);
//console.log("counter6= ", counter)



/////////////////////////////Question07
let places = ['borj-khalifa', 'garden of roses', 'bedaazaid', 'dubai'];
let Question07 = "Try to guess my favourate places in UAE ! "
let sparkle = prompt(Question07)

counter += Question_Trial(6, Question07, sparkle, places, 7);
console.log("the final score    ", counter)




if (counter == 7) {
    alert('Gongradulation !' + UserInput);
} else {
    alert('I am sorry for that but you did not win !');
}

alert(UserInput + ' your score is : ' + counter + ' out of 7');