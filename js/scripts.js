$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var insertName = $("input#insertName").val();

    $(".insertName").text(insertName);

    $("#letter").show();

    event.preventDefault();
  });
});