var x = setInterval(function() {
  var countDownDate = new Date("SEP 25, 2020 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output
  $("#day").text(days)
  $("#hour").text(hours)
  $("#min").text(minutes)
  if (distance < 0) {
    clearInterval(x);
    // Done  Output
    $("#day").text("0")
    $("#hour").text("0")
    $("#min").text("0")
    $(".apply").css("visibility", "hidden")
  }
}, 1000)
