// Attach at least three event listeners to DOM elements or timer events
// In at least one callback, use JavaScript to change the CSS style of at least one element (this can be done indirectly by, for example, changing the class of an element and using CSS to make it display differently)
// In at least one callback, use JavaScript to modify the DOM structure by adding or deleting elements
// Then, you must do at least one of the following:
//
// Use JavaScript to load content from an <input /> or <textarea /> element
// Integrate a  third-party library like lodash (any library is fine)
// Write an event listener that reacts to something other than click
// Write a JavaScript function which takes an array of strings and creates a set of <li> elements
// Some ideas that you can explore:
//
// Implement an image carousel widget that cycles through a set of images
// Implement multiple themes for your website and add buttons to toggle the theme
// Implement a widget to randomly display a picture/message/link from a list of items
// Implement a comment widget to your personal website (we'll talk about how to store things later on)
// Implement a todo list
// Implement a shopping cart


// document.getElementByClass("close-button").onclick = closeBanner;

function closeBanner(){
  document.getElementById("header").remove();
}

function bigImg(x) {
  x.style.height = "260px";
  x.style.boxShadow = "2px 2px 4px 4px";
}

function normalImg(x) {
  x.style.height = "240px";
  x.style.boxShadow = "none";
}

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
