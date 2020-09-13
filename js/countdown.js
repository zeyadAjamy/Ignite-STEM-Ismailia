var x = setInterval(function() {
  var countDownDate = new Date("JUL 1, 2020 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output
  $(".time").text(days + " : " + hours + " : " + minutes +" : " + seconds)
  if (distance < 0) {
    clearInterval(x);
    // Done  Output
    $(".time").text("EXPIRED");
    $(".apply").css("visibility", "hidden")
  }
}, 1000)
