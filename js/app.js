$(document).ready(function () {
  $("h1").text("Изменененый заголовок");

  $(".item:first").text();

  $(".item").eq(2).text();

  let element = $(".item")[0];
  $(element).text();

  $("h1").html("Это <span>ыфвфыв</span>");

  $("#name").attr("placeholder", "Имя");
  $("#name").removeAttr("placeholder", "Имя");

  $("h1").addClass("active");

  $("h1").append("<div>333</div>");

  $("h1").css("color", "red");

  $("ul").on("click", function (event) {
    var target = $(event.target);
    if (target.is("li")) {
      target.css("background-color", "red");
    }
  });

  $("h1").click(function () {
    alert(1);
  });

  $("input").keydown((event) => {
    console.log(event.key);
  });

  $("input").on("click", function () {
    console.log($(this).text());
  });

  $("h2").click(function () {
    $("h2").hide();
  });

  $("h3").click(function () {
    $("h3").fadeOut("slow", "linear", () => {
      console.log("end");
    });
  });

  $("h4").click(function () {
    $("h4").animate({ fontSize: "70px", marginLeft: "+=50px" });
  });
});
