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
