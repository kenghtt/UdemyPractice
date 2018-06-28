/**
 * User: jeremytouch
 * Date: 6/25/18
 * Time: 4:07 PM
 */
// define(function () {
    var wordSplit = document.getElementById("wordSplit")
    var listOfWords = wordSplit.getElementsByTagName("span")


var i = 0;
    var j = 0;



// do{
    //
    //     // if(onkeydown == currentLetter) {
    //     //     alert("You pressed the correct Letter :) Congrats!")
    //     //     alert("You pressed the correct Letter :) Congrats!")
    //     //
    //     //     // document.getElementById('wordSplit').getElementsByTagName('span')[i].style.backgroundColor = "Yellow";    //this line works, but highlights the word
    //     //     currentLetter[i].style.backgroundColor = "Yellow";          //this line is breaking, coming as undefined
    //     //     i++;
    //     //     document.getElementById('wordSplit').getElementsByTagName('span')[i - 1].style.backgroundColor = ""
    //     // }
    //
    // }while(i < listOfWords.length)



// var keyDownLetter = document.addEventListener("keydown", keyDownFunction);
var currentLetter = document.getElementById('wordSplit').getElementsByTagName('span')[i].innerText[j]   //T



// document.getElementById('wordSplit').getElementsByTagName('span')[i].addEventListener("keydown", keyDownFunction);




 function keyDownFunction(){


     if(currentLetter == keyDownLetter){

         j++;    //increments to the next letter
      i++;  //increments to the next word

         alert("KEY DOWN WORKED")
     }
     else {
         alert("KEY DOWN NOT NOT NOT WORKED")

     }



 }