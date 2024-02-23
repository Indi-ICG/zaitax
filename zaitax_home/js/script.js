$(document).ready(function () {
  $(".list-services a.tooltips").easyTooltip();

  // load components
  $("#footer").load("footer.html");
  $("#header").load("header.html", function () {
    loadNavbar();
    
    $.getJSON("/lang.json", (json) => {
      changeLanguage(json, true);

      // Language button
      $(".language").click(() => {
        changeLanguage(json);
      });
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
  } else if (pathname.includes("clients")) {
    $("#nav-clients").addClass("active");
  } else {
    $("#nav-home").addClass("active");
  }
}

function changeLanguage(json, langDefault) {
  // translation
  let langLocal = localStorage.getItem("language");

  if (!!langDefault) {
    if (langLocal == "ES") {
      langNew = "ES";
      $(".img-language").attr("src", "/images/spanish.png");
    } else {
      langNew = "EN";
      $(".img-language").attr("src", "/images/english.png");
    }
  } else {
    if (langLocal == "EN") {
      langNew = "ES";
      $(".img-language").attr("src", "/images/spanish.png");
    } else {
      langNew = "EN";
      $(".img-language").attr("src", "/images/english.png");
    }
  }

  $(".language span").text(langNew);
  localStorage.setItem("language", langNew);

  $(".lang").each(function () {
    $(this).text(json[langNew][$(this).attr("key")]);
  });
}
