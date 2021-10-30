
// chooses and displays the correct draft
function f(number) {
    console.log("open draft " + number);
}

//popup post 
// $(function () {
//   "use strict";
  
//   $(".post img").click(function () {
//       var $src = $(this).attr("src");
//       $(".show").fadeIn();
//       $(".show-post img").attr("src", $src);
//   });
  
//   $("span, .overlay").click(function () {
//       $(".show").fadeOut();
//   });
  
// });

function toggleComments() {
  console.log("toggling comments visibility");
  var comments = document.getElementsByClassName("comments");
  var button = document.getElementById("load-comments")
  if (button.innerHTML === "Show comments") {
    button.innerHTML = "Hide comments";
  } else {
    button.innerHTML = "Show comments";
  }
  for (var i = 0; i < comments.length; i++) {
    if (comments[i].style.display === "block") {
      comments[i].style.display = "none";
    } else {
      comments[i].style.display = "block";
    }
  }
}
