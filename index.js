var item = $("#error-msg");
item.fadeOut(0);

$("#input-btn").click(function () {
  var input = $("#email-input").val();
  console.log(validate(input));

  if (input === "" || validate(input) === false) {
    item.fadeIn();
    $("#email-input").addClass("warning-box");
    if ($("body").width() < 481) {
      $("#user-input").addClass("adjust-box");
    }
  } else {
    item.fadeOut();
    $("#email-input").removeClass("warning-box");
    if ($("body").width() < 481) {
      $("#user-input").removeClass("adjust-box");
    }
  }
});

function validate(email) {
  var pattern = /^[\w]+[\.\w+]*[\w]+@[\w]+\.[\w]+[\.\w]*[\w]+$/;
  return pattern.test(email);
}
