<<<<<<< HEAD
console.log("login.js");

$(document).on("click", "#login-button", function() {
  console.log("logic button");
=======
$("#login-button").click(function() {
>>>>>>> e1bc75ebc63d65e9e9648a61a555431e638e7822
  $("#login-button").fadeOut("slow", function() {
    $("#container").fadeIn();
    TweenMax.from("#container", 0.4, { scale: 0, ease: Sine.easeInOut });
    TweenMax.to("#container", 0.4, { scale: 1, ease: Sine.easeInOut });
  });
});

$(".close-btn").click(function() {
  TweenMax.from("#container", 0.4, { scale: 1, ease: Sine.easeInOut });
  TweenMax.to("#container", 0.4, {
    left: "0px",
    scale: 0,
    ease: Sine.easeInOut
  });
  $("#container, #forgotten-container").fadeOut(800, function() {
    $("#login-button").fadeIn(800);
  });
});

/* Forgotten Password */
$("#forgotten").click(function() {
  $("#container").fadeOut(function() {
    $("#forgotten-container").fadeIn();
  });
});
