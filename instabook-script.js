// chooses and displays the correct draft
function f(number) {
  console.log("open draft " + number);
}

function toggleComments(post) {
  console.log("toggling comments visibility");
  var commentsname = "comments" + post;
  var buttonname = "load-comments" + post;
  var comments = document.getElementById(commentsname);
  var button = document.getElementById(buttonname)
  if (button.innerHTML === "Show comments") {
    button.innerHTML = "Hide comments";
  } else {
    button.innerHTML = "Show comments";
  }
  if (comments.style.display === "block") {
    comments.style.display = "none";
  } else {
    comments.style.display = "block";
  }
}

function progressDialogue() {
  var dialogue = document.getElementById("dialogue");
  if (dialogue.textContent === "Clicked to progress dialogue") {
    dialogue.textContent = "Progressed dialogue again";
  } else {
    dialogue.textContent = "Clicked to progress dialogue";
  }
}

function toggleDialogue() {
  console.log("Clicked to toggle dialogue");
  var dialogue = document.getElementById("dialogueBox");
  var dialogueactual = document.getElementById("dialogue");
  dialogueactual.textContent = "Alma says hi";
  if (dialogue.style.display === "block") {
    dialogue.style.display = "none";
  } else {
    dialogue.style.display = "block";
  }
}

//modal code for dog
var modal = document.getElementById("dogmodal");
var img = document.getElementById("dog");
var modalImg = document.getElementById("img02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];
span.onclick = function() {
  modal.style.display = "none";
}

//modal code for image pop up: school 
var modal = document.getElementById("schoolmodal");
var img = document.getElementById("school");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

//modal code for image pop up: car 
var modal = document.getElementById("carmodal");
var img = document.getElementById("car");
var modalImg = document.getElementById("img03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close3")[0];
span.onclick = function() {
  modal.style.display = "none";
}