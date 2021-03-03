'use strict';



let UserInput =prompt("Can you tell me your name , please !");

while (!UserInput){
    UserInput=prompt('please provide a name !');
}
alert("welcome to our site " + UserInput);
console.log("Can you tell me your name , please !" + UserInput);
console.log("welcome to our site " + UserInput);
let counter=0;

alert("I will ask you a few quastions and your answers must be just yes or no !");
let nameGuss=prompt("Can you guess the creater of this websit !? ");
if (nameGuss=== "yes" || nameGuss=== "Yes" || nameGuss=== "YES" || nameGuss=== "y" || nameGuss=== "Y") {
    alert("Ok , will see !" +  UserInput);
    counter+=1;
    cosnsole.log('your score is :' + counter);
    console.log("Can you guess the creater of this websit !? "+ nameGuss);
} else {
    console.log("Can you guess the creater of this websit !? " + "Ok , thank you !" + nameGuss);
    alert("Ok , thank you !" + UserInput); 
} 

let ageGuss=prompt("Can you gess the age of the creater !?")
if (ageGuss=== "yes" || ageGuss=== "Yes" || ageGuss=== "YES" || ageGuss=== "y" || ageGuss=== "Y") {
    alert("Ok , will see !" + UserInput);
    counter+=1;
    cosnsole.log('your score is :' + counter);
    console.log("Can you gess the age of the creater !?" + ageGuss);
} else {
    alert("Ok , thank you !");
    console.log("Can you gess the age of the creater !?" +"Ok , thank you !"+ ageGuss ); 
}


let majorGuess=prompt("Did you think the creater studed somthing related to computer and IT in general !?");
if (majorGuess=== "yes" || majorGuess=== "Yes" || majorGuess=== "YES" || majorGuess=== "y" || majorGuess=== "Y") {
    alert("OF course , unless how this webpage is created ! dah !");
    counter+=1;
    cosnsole.log('your score is :' + counter);
    console.log("Did you think the creater studed somthing related to computer and IT in general !?"+ majorGuess);
} else {
    alert("Are you shoure about that honey !"); 
    console.log("Did you think the creater studed somthing related to computer and IT in general !?"+ "Are you shoure about that honey !" + majorGuess);
}

let statusGuess=prompt("Did you think the creater love shawerma ?!");
if (statusGuess=== "yes" || statusGuess=== "Yes" || statusGuess=== "YES" || statusGuess=== "y" || statusGuess=== "Y") {
    alert("Who didn't love this delicious meal !");
    counter+=1;
    cosnsole.log('your score is :' + counter);
    console.log("Did you think the creater lovw shawerma ?!" + statusGuess);
} else {
    alert("Are you shoure about that couse who didn't !"); 
    console.log("Did you think the creater lovw shawerma ?!"+ "Are you shoure about that couse who didn't !" + statusGuess);
}

let confermGuess=prompt("Would you advise to continue what the creator doing?! ");
if (confermGuess=== "yes" || confermGuess=== "Yes" || confermGuess=== "YES" || confermGuess=== "y" || confermGuess=== "Y") {
    alert(" I appreciate your advice i will take it into consideration , thank you !");
    counter+=1;
    cosnsole.log('your score is :' + counter);
    console.log("Would you advise to continue what the creator  doing?! " + confermGuess);
} else {
    alert(" Ok , i appreciate your advise !"); 
    console.log("Would you advise to continue what the creator doing?! "+ "Are you shoure about that honey !"+" Ok , i appreciate your advise !" + confermGuess);
}
let randomNumber=600;
let  salaryGuess=prompt("would you guess the salary for the creater ?!");
salaryGuess=parseInt(salaryGuess);
let guessAllowed=3;

while(salaryGuess!== randomNumber){
    if(!guessAllowed){
        alert('you are not allowed to try more , sorry !');
    }
 if (guesLess ===randomNumber){
          alert("You guessed the number !");
         counter+=1;

  if (salaryGuess > randomNumber ){
      let guesLess=prompt("choose a smaller number !");
     guessAllowed-=1;
      }  
    } else if(salaryGuess < randomNumber){
        let guessmore=prompt("choose a larger number !");
        if(guessmore === randomNumber){
            alert("you gussed the number !");
            
        }
    }
    guessAllowed--;
}
    console.log("would you guess the salary for the creater ?!" +salaryGuess );
