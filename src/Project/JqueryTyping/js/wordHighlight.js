/**
 * User: jeremytouch
 * Date: 6/25/18
 * Time: 4:07 PM
 */
// define(function () {
    var wordSplit = document.getElementById("wordSplit")
    var listOfWords = wordSplit.getElementsByTagName("span")

// var currentLetter1= document.getElementById('wordSplit').getElementsByTagName('span')[0]

// var currentLetter = document.getElementById('wordSplit').getElementsByTagName('span')[0].innerText   //There


    // if(currentletter[i])

// for(var i = 0, l = listOfWords.length; i < l; i++){


// l = listOfWords.length;

var i = 0;

    do{
        var currentLetter = document.getElementById('wordSplit').getElementsByTagName('span')[i].innerText   //There

        // document.getElementById('wordSplit').getElementsByTagName('span')[i].style.backgroundColor = "Yellow";    //this line works, but highlights the word
        currentLetter[i].style.backgroundColor = "Yellow";          //this line is breaking, coming as undefined
        i++;
        document.getElementById('wordSplit').getElementsByTagName('span')[i-1].style.backgroundColor = ""


    }while(i < listOfWords.length){


    }

    // currentLetter.body.style.color = "Yellow";
    // currentLetter.background.color = "Blue";
    // document.getElementById('wordSplit').getElementsByTagName('span')[0].innerText;
    // document.getElementById('wordSplit').getElementsByTagName('span')[i-1].style.backgroundColor = ""

    document.getElementById('wordSplit').getElementsByTagName('span')[i].style.backgroundColor = "Yellow"

    // document.getElementById("centerbox1").style.backgroundColor = '#99C262';


    // document.body.style.cssText = 'color:#abcdef;';
    // timer(currentLetter);

// }



    // alert(currentLetter);


// var spans = document.getElementById('xyx').getElementsByTagName('span'),
//     obj = {};
//
// for(var i = 0, l = spans.length; i < l; i++){
//     obj[spans[i].id] = spans[i].textContent || spans[i].innerText;
// }


    // return {};
// });