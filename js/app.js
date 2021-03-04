'use strict';
 let counter=0;
  let UserInput =prompt("Can you tell me your name , please !");
  while (!UserInput){
  UserInput=prompt('please provide a name !');
  }
  alert("welcome to our site " + UserInput);
  console.log("Can you tell me your name , please !" + UserInput);
  console.log("welcome to our site " + UserInput);

  alert("I will ask you a few quastions and your answers must be just yes or no !");
 
  let nameGuss=prompt("Can you guess the creater of this websit !? ");
  if (nameGuss=== "yes" || nameGuss=== "Yes" || nameGuss=== "YES" || nameGuss=== "y" || nameGuss=== "Y") {
  alert("Ok , will see !" +  UserInput); 
  cosnsole.log('your score is :' + counter);
  console.log("Can you guess the creater of this websit !? "+ nameGuss);
  counter++;
  } else {
  console.log("Can you guess the creater of this websit !? " + "Ok , thank you !" + nameGuss);
  alert("Ok , thank you !" + UserInput); 
  } 
  
  let ageGuss=prompt("Can you gess the age of the creater !?");
  if (ageGuss=== "yes" || ageGuss=== "Yes" || ageGuss=== "YES" || ageGuss=== "y" || ageGuss=== "Y") {
  alert("Ok , will see !" + UserInput);
  cosnsole.log('your score is :' + counter);
  console.log("Can you gess the age of the creater !?" + ageGuss);
  counter++;  
  } else {
  alert("Ok , thank you !");
  console.log("Can you gess the age of the creater !?" +"Ok , thank you !"+ ageGuss ); 
  } 
  

  let majorGuess=prompt("Did you think the creater studed somthing related to computer and IT in general !?");
  if (majorGuess=== "yes" || majorGuess=== "Yes" || majorGuess=== "YES" || majorGuess=== "y" || majorGuess=== "Y") {
  alert("OF course , unless how this webpage is created ! dah !");
  cosnsole.log('your score is :' + counter);
  console.log("Did you think the creater studed somthing related to computer and IT in general !?"+ majorGuess);
  counter++;
  } else {
  alert("Are you shoure about that honey !"); 
  console.log("Did you think the creater studed somthing related to computer and IT in general !?"+ "Are you shoure about that honey !" + majorGuess);
  }
  

  let statusGuess=prompt("Did you think the creater love shawerma ?!");
  if (statusGuess=== "yes" || statusGuess=== "Yes" || statusGuess=== "YES" || statusGuess=== "y" || statusGuess=== "Y") {
  alert("Who didn't love this delicious meal !");
  cosnsole.log('your score is :' + counter);
  console.log("Did you think the creater lovw shawerma ?!" + statusGuess);
  counter++; 
  } else {
  alert("Are you shoure about that couse who didn't !"); 
  console.log("Did you think the creater lovw shawerma ?!"+ "Are you shoure about that couse who didn't !" + statusGuess);
  } 
  

  let confermGuess=prompt("Would you advise to continue what the creator doing?! ");
  if (confermGuess=== "yes" || confermGuess=== "Yes" || confermGuess=== "YES" || confermGuess=== "y" || confermGuess=== "Y") {
  alert(" I appreciate your advice i will take it into consideration , thank you !");
  cosnsole.log('your score is :' + counter);
  console.log("Would you advise to continue what the creator  doing?! " + confermGuess);
  counter++;
  } else {
  alert(" Ok , i appreciate your advise !"); 
  console.log("Would you advise to continue what the creator doing?! "+ "Are you shoure about that honey !"+" Ok , i appreciate your advise !" + confermGuess);
   }
  
  
  let salary=550;
  for (let i=4 ;i>=1 ;i--){
  let guessSalary=prompt('try to guess the salary of the wedsite creater ! ** Hent: it is between 300 and 600 ');
  if (guessSalary== salary){
  alert('yah you got it ' +UserInput);      
  break;
  }else if (guessSalary< 550){
  alert('no not that much its too low ');
  }else {
  alert('will , i hope and i am working to reach this salary and above actually !');
    }
  if (i==1)
  alert('550 was my salary actully ! ');
  }

 
 let places =['borj-khalifa' , 'garden of roses' ,'bedaazaid' ,'dubai' ];
 let sparkle=['it places in United Arab Emarat '];
 for (let i=0 ; i<5;i++){
   let favPlaces=prompt("Try to guess my favourate places in UAE !");
    if (favPlaces==places[0] || favPlaces==places[1] || favPlaces==places[2] || favPlaces==places[3] ){
   alert('yaaaaaas you guess my favorate place ');
    counter+=1;
    break;
 }
   if (i==5){
    alert('The answer was borj-khalifa , garden of roses , bedaazaid ,dubai');
  }
} 

if (favPlaces!==places[0] || favPlaces!==places[1] || favPlaces!==places[2] || favPlaces!==places[3] ){
    console.log(sparkle[i]);
    alert(sparkle[i]);
 }

 

 if (counter==7){
    alert('Gongradulation !' + UserInput);
 }
  else{
    alert('I am sorry for that but you did not win !');
    }

 alert(UserInput+'your score is :' + counter +'out of 7');

















