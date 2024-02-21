$(document).ready(function () {
  $(".list-services a.tooltips").easyTooltip();

  // components
  $("#header").load("header.html", function () {
    loadNavbar();
  });
  $("#footer").load("footer.html");
});

function loadNavbar() {
  var pathname = window.location.pathname;
  console.log(pathname);

  if (pathname.includes("services")) {
    $("#nav-services").addClass("active");
    console.log("services");
  } else if (pathname.includes("company")) {
    $("#nav-company").addClass("active");
    console.log("company");
  } else if (pathname.includes("contacts")) {
    $("#nav-contacts").addClass("active");
    console.log("contacts");
  } else if (pathname.includes("clients")) {
    $("#nav-clients").addClass("active");
    console.log("clients");
  } else {
    $("#nav-home").addClass("active");
    console.log("home");
  }
}
