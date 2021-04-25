import aframe from 'aframe';

window.onload = function(){
  var h2s = document.getElementsByTagName("h2");
  var i;
  for(i=0; i<h2s.length; i++){
    h2s[i].addEventListener("mouseover", function(){
      this.style.textDecoration="underline";
    }, false);
    h2s[i].addEventListener("mouseout", function(){
      this.style.textDecoration="none";
    }, false);
  }
};

function closeBanner(){
  document.getElementById("header").remove();
};
window.closeBanner = closeBanner;

function bigImg(x) {
  x.style.height = "260px";
  x.style.boxShadow = "2px 2px 4px 4px";
};
window.bigImg = bigImg;

function normalImg(x) {
  x.style.height = "240px";
  x.style.boxShadow = "none";
};
window.normalImg = normalImg;
