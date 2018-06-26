/**
 * User: jeremytouch
 * Date: 6/25/18
 * Time: 4:07 PM
 */
// define(function () {
    var wordSplit = document.getElementById("wordSplit")
    var currentLetter = wordSplit.getElementsByTagName("span")

// var currentLetter1= document.getElementById('wordSplit').getElementsByTagName('span')[0]

document.getElementById('wordSplit').getElementsByTagName('span')[0].innerText   //There
    // if(currentletter[i])

for(var i = 0, l = currentLetter.length; i < l; i++){
    obj[spans[i].id] = spans[i].textContent || spans[i].innerText;
}


timer(wordSplit);

    // alert(currentLetter);


// var spans = document.getElementById('xyx').getElementsByTagName('span'),
//     obj = {};
//
// for(var i = 0, l = spans.length; i < l; i++){
//     obj[spans[i].id] = spans[i].textContent || spans[i].innerText;
// }


    // return {};
// });