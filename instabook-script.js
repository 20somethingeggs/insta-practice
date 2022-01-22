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