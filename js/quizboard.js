const quizAnswers = document.querySelectorAll(".ouranswers");

const submitAnswer = document.querySelector("#submit_ans");

const mymarks = document.querySelector("#yourmarks");

let marks = 0;

let total = 0;

quizAnswers.forEach(function (jibu) {
  if (parseInt(jibu.value) > 0) {
    total += parseInt(jibu.value);
  }
});

submitAnswer.addEventListener("click", function (event) {
  quizAnswers.forEach(function (jibu) {
    if (jibu.checked) {
      marks += parseInt(jibu.value);
    }
  });

  let score = (marks / total) * 100;

  let message = "";

  if (score >= 80) {
    message += "your score is " + score + "%. Excellent!";
  } else if (score >= 50 && score < 80) {
    message += "your score is " + score + "%. Fairly Passed!";
  } else {
    message += "your score is " + score + "%. Poor result, please retake the test!";
  }

  mymarks.textContent = message;
  marks = 0;
});

$("document").ready(function () {
  $("#submit_ans").click(function () {
    $("#display").removeClass("d-none");
    $(".ouranswers").attr("disabled",true);
    $(this).attr("disabled", true);
  });
  $(".retake").click(function(){
    $("#submit_ans").attr("disabled", false);
    $(".ouranswers").attr("disabled",false);
    $(".ouranswers").prop("checked",false);
    $("#display").addClass("d-none");
  });

});
