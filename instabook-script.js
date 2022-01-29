// chooses and displays the correct draft
function f(number) {
  console.log("open draft " + number);
}

var dialogueBox = document.getElementById("dialogue");
var dialogueDiv = document.getElementById("dialogueBox");
var dialogueShown = false;
var pageCover = document.getElementById("pageCover");

function toggleComments(post) {
  console.log("toggling comments visibility");
  if (!dialogueShown) {
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
}

function progressDialogue(dialogueNumber) {
  console.log("Progressed dialogue");
  var currentDialogue = dialogueBox.innerHTML;
  var dialogueIndex = dialogue[dialogueNumber].findIndex((element) => element === currentDialogue);
  if (dialogue[dialogueNumber].length - 1 === dialogueIndex) {
    console.log("Hiding dialogue");
    dialogueDiv.style.display = "none";
    dialogueShown = false;
    pageCover.style.display = "none";
  } else {
    dialogueBox.innerHTML = dialogue[dialogueNumber][dialogueIndex + 1];
  }
}

function toggleDialogue(dialogueNumber) {
  console.log("Clicked to toggle dialogue 0");
  dialogueShown = true;
  pageCover.style = "block";
  dialogueBox.innerHTML = initialDialogue[dialogueNumber];
  if (dialogueDiv.style.display === "none") {
    dialogueDiv.style.display = "block";
  }
}

var dialogue = [
  ["Let's check the Doughmino's Pizza for fraud! I heard there might be some identity issues there."],
  ["Let's see if we can find any information about the employees."],
  ["This name could be useful. Let’s see what we can find out about this person."],
  ["Perhaps we can find this person’s account because we know this business is ",
    "involved with some shady stuff. Let’s use our special search engine back at the base."
  ],
  ["All right, let's see what we can find out about __!"],
  ["It looks like we might be able to find some valuable information here."],
  ["I wonder if we can get into this email to find evidence of shady doings."],
  ["Darn, I wonder how we can get the answers to these questions?"]
];

var initialDialogue = ["Perhaps we can find this person’s account because we know this business is "];