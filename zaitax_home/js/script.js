$(document).ready(function () {
  $(".list-services a.tooltips").easyTooltip();

  // load components
  $("#header").load("header.html", function () {
    loadNavbar();

    // Language button
    $("#btn-english").click(() => {
      changeLanguage("EN");
    });
    $("#btn-spanish").click(() => {
      changeLanguage("ES");
    });

    $("#footer").load("footer.html", function () {
      changeLanguage();
    });
  });
});

function loadNavbar() {
  // page indicator
  var pathname = window.location.pathname;

  if (pathname.includes("services")) {
    $("#nav-services").addClass("active");
  } else if (pathname.includes("company")) {
    $("#nav-company").addClass("active");
  } else if (pathname.includes("contacts")) {
    $("#nav-contacts").addClass("active");
  } else {
    $("#nav-home").addClass("active");
  }
}

function changeLanguage(langNew) {
  // translation

  if (langNew == null) {
    let langLocal = localStorage.getItem("language");

    langNew = langLocal == null ? "ES" : langLocal;
  }

  $.getJSON("/lang.json", (json) => {
    localStorage.setItem("language", langNew);
    $(".lang").each(function () {
      $(this).text(json[langNew][$(this).attr("key")]);
    });
  });
}
