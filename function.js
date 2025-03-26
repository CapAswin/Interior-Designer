// script.js
let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide the header
    header.style.top = "-60px";
  } else {
    // Scrolling up, show the header
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
// Close the drawer if clicking outside of it
const backdrop = document.getElementById("backdrop");
const drawer = document.getElementById("mySidenav");
const toggleButton = document.getElementById("toggleDrawer");
document.addEventListener("click", function (event) {
  const isClickInsideDrawer = drawer?.contains(event.target);
  const isClickToggleButton = toggleButton?.contains(event.target);
  if (!isClickInsideDrawer && !isClickToggleButton) {
    closeNav(event);
  }
});
backdrop?.addEventListener("wheel", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
drawer?.addEventListener("wheel", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
backdrop?.addEventListener("touchmove", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
drawer?.addEventListener("touchmove", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

function openNav(e) {
  backdrop?.classList?.toggle("active");
  document.getElementById("mySidenav").style.width = "250px";
  e.stopPropagation();
}

function closeNav(e) {
  backdrop?.classList?.remove("active");
  document.getElementById("mySidenav").style.width = "0";
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
    footer?.classList?.add("active");
    footerLinks?.classList?.add("active");
  } else {
    footer?.classList?.remove("active");
    footerLinks?.classList?.remove("active");
  }
});

function toAppointment(event) {
  event.preventDefault();
  event.stopPropagation();
  var targetPosition = $("#Appointment").offset().top;
  $("html, body").animate({ scrollTop: targetPosition }, 1500, "easeInOutExpo");
  closeNav();

  return false;
}
function toServices(event) {
  event.preventDefault();
  event.stopPropagation();
  var targetPosition = $("#Services").offset().top;
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

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("WholePage"))
    var datepicker = new Datepicker(document.getElementById("datepicker"), {
      autohide: true,
      format: "dd/mm/yyyy",
      todayHighlight: true,
    });
});

// header logic
const header1 = document.getElementById("header");
header1.classList.add("hidden");
// const header2 = document.getElementById("header1");
const triggerHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= triggerHeight) {
    header1.classList.remove("hidden");
    // header2.classList.remove("hidden");
  } else {
    header1.classList.add("hidden");
    // header2.classList.add("hidden");
  }
});

//mail
// const btn = document.getElementById("contactUs_btn");

// document
//   .getElementById("appointmentForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const mobile = document.getElementById("mobile").value;
//     const service = document.getElementById("service").value;
//     const date = document.getElementById("date").value;
//     const time = document.getElementById("time").value;
//     const message = document.getElementById("message").value;

//     // Prepare the email data
//     const templateParams = {
//       name: name,
//       email: email,
//       mobile: mobile,
//       service: service,
//       date: date,
//       time: time,
//       message: message,
//     };

//     btn.value = "Sending..."; // Change button text to indicate email is being sent

//     const serviceID = "service_3u1ygwb";
//     const templateID = "template_l8xnaaf";

//     // Send email using EmailJS
//     emailjs.send(serviceID, templateID, templateParams).then(
//       () => {
//         btn.value = "Send Email"; // Reset the button text
//         alert("Your appointment has been sent!");
//         document.getElementById("appointmentForm").reset(); // Reset form after successful submission
//       },
//       (err) => {
//         btn.value = "Send Email"; // Reset the button text in case of error
//         alert("Error sending email: " + JSON.stringify(err));
//       }
//     );
//   });

//mail
const BREVO_API_KEY =
  "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"; // Replace with your actual API key

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
