/*
* Excercise 1
*
*/

let flag=0;
document.getElementById("color-block").onclick = changeColor;
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(flag==0){
        //change the background color using JS
        document.getElementById("color-block").style.backgroundColor = "#684FD1";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerText = "#684FD1";
        flag=1;
    }
    else{
        //change the background color using JS
        document.getElementById("color-block").style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerText = "#F08080";
        flag=0;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
document.getElementById("convertbtn").onclick = convertTemp;

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    fah = parseFloat(document.getElementById("f-input").value);
    console.log(fah);
    let cel = (fah-32)*5/9;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerText = cel;
}
