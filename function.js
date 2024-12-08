// script.js

let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide the header
    header.style.top = "-60px";
  } else {
    // Scrolling up, show the header
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
// document.getElementById("Landingimg").addEventListener('click', function (event) {
//     header.style.top = header.style.top !== "-60px" ? "-60px" : "0px";
// })
// Close the drawer if clicking outside of it
document.addEventListener("click", function (event) {
  const drawer = document.getElementById("mySidenav");
  const toggleButton = document.getElementById("toggleDrawer");
  const isClickInsideDrawer = drawer.contains(event.target);
  const isClickToggleButton = toggleButton.contains(event.target);
  console.log(isClickInsideDrawer, isClickToggleButton);
  if (!isClickInsideDrawer && !isClickToggleButton) {
    closeNav(event);
  }
});

function openNav(e) {
  console.log("first");
  document.body.style.overflow = "hidden";
  document.getElementById("mySidenav").style.width = "250px";
  e.stopPropagation();
}

function closeNav(e) {
  document.body.style.overflow = "";
  document.getElementById("mySidenav").style.width = "0";
  e.stopPropagation();
}
function justClick(e) {
  e.stopPropagation();
}

window.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer");
  const footerLinks = document.querySelector(".footer-links");
  const scrollPosition = window.scrollY;
  const footerHeight = footer?.offsetHeight;

  if (scrollPosition >= window.innerHeight - footerHeight) {
    footer.classList.add("active");
    footerLinks.classList.add("active");
  } else {
    footer.classList.remove("active");
    footerLinks.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var datepicker = new Datepicker(document.getElementById("datepicker"), {
    autohide: true,
    format: "dd/mm/yyyy",
    todayHighlight: true,
  });
});
function toAppointment(event) {
  event.preventDefault();
  event.stopPropagation();
  var targetPosition = $("#Appointment").offset().top;
  $("html, body").animate({ scrollTop: targetPosition }, 1500, "easeInOutExpo");
  closeNav();

  return false;
}

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    //find position of element with id contact
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".whatsapp-flt").fadeIn("slow");
    } else {
      $(".whatsapp-flt").fadeOut("slow");
    }
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  });
})(jQuery);
