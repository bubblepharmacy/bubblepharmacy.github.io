let start = 0;
var myVar;

function startWatch(){
  myVar = setInterval(myTimer, 1000);
  document.getElementById("btn_start").disabled = true;
  document.getElementById("btn_stop").disabled = false;

}

function myTimer() {
  // var d = new Date();
  start++;
  document.getElementById("time").innerHTML = start;
}

function stopWatch(){
  clearInterval(myVar);
  document.getElementById("btn_start").disabled = false;
  document.getElementById("btn_stop").disabled = true;
}

function resetWatch(){
  clearInterval(myVar);
  document.getElementById("btn_start").disabled = false;
  document.getElementById("btn_stop").disabled = false;
  start=0
  document.getElementById("time").innerHTML = start;
}
