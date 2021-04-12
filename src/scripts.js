$(document).ready(function () {
  $("form#triangles").submit(function (event) {
    event.preventDefault();
    const inputOne = parseInt($("#side1").val());
    const inputTwo = parseInt($("#side2").val());
    const inputThree = parseInt($("#side3").val());

    if (inputOne + inputTwo <= inputThree || inputTwo + inputThree <= inputOne || inputOne + inputThree <= inputTwo) {
      $("#no").show();
    } else if (inputOne === inputTwo && inputOne === inputThree) {
      $("#equal").show();
    } else if (inputOne === inputTwo || inputOne === inputThree || inputTwo === inputThree) {
      $("#iso").show();
    } else if (inputOne != inputTwo && inputOne != inputThree && inputTwo != inputThree) {
      $("#scal").show();
    }
  });
});