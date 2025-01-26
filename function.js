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

function snackBarOpen() {
  const snackbar = document.getElementById("snackbar");
  const duration = 4000; // Duration in milliseconds (4 seconds)

  // Show Snackbar with animation
  snackbar.classList.add("show");

  // Hide Snackbar after duration with animation
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, duration);
}

function closeSnackbar() {
  const snackbar = document.getElementById("snackbar");
  snackbar.classList.remove("show");
}

//mail
// const BREVO_API_KEY =
//   "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"; // Replace with your actual API key

// document.getElementById("contactForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const data = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     mobile: document.getElementById("mobile").value,
//     service: document.getElementById("service").value,
//     date: document.getElementById("date").value,
//     time: document.getElementById("time").value,
//     message: document.getElementById("message").value,
//   };
//   // Your custom HTML template
//   const mailTemplate = `
//     <html>
//       <body style="font-family: 'Arial', sans-serif; line-height: 1.6; background-color: #f9f9f9; margin: 0; padding: 0; color: #444;">
//         <div class="email-container" style="max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
//           <div class="header" style="background: #f9f9f9; color: #7a543b; padding: 20px; text-align: center; font-size: 18px; font-weight: bold;">
//             New Appointment Request
//           </div>
//           <div class="body" style="padding: 20px;">
//             <h2 style="color: #7a543b; font-size: 18px; margin: 0 0 10px;">Hello, you have a new appointment request:</h2>
//             <div class="info" style="margin: 15px 0; font-size: 14px; line-height: 1.5;">
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Name:</span> ${data.name}</div>
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Email:</span> ${data.email}</div>
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Mobile:</span> ${data.mobile}</div>
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Service:</span> ${data.service}</div>
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Preferred Date:</span> ${data.date}</div>
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Preferred Time:</span> ${data.time}</div>
//               <div style="margin-bottom: 8px;"><span style="font-weight: bold; color: #7a543b;">Message:</span> ${data.message}</div>
//             </div>
//             <a href="mailto:${data.email}" class="cta-button" style="display: inline-block; background-color: #7a543b; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; font-size: 14px;">Reply to Client</a>
//           </div>
//           <div class="footer" style="text-align: center; background: #f9f9f9; padding: 15px; font-size: 12px; color: #777;">
//             <p>This email was sent automatically by Teak Room's system.</p>
//             <p>&copy; 2025 Teak Room</p>
//           </div>
//         </div>
//       </body>
//     </html>
//   `;

//   const emailData = {
//     sender: { name: data.name, email: "aswinjocker@gmail.com" }, // Sender's email
//     // to: [{ email: "admin@teakroom.in", name: "Admin Teakroom" }], // Recipient's email
//     to: [{ email: "ltas@gmail.com", name: "Admin Teakroom" }], // Recipient's email
//     subject: "New Appointment Request",
//     htmlContent: mailTemplate, // Custom HTML content
//   };

//   try {
//     const response = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-key": BREVO_API_KEY,
//       },
//       body: JSON.stringify(emailData),
//     });

//     if (response.ok) {
//       snackBarOpen();
//       e.target.reset();
//     } else {
//       const result = await response.json();
//       alert(`Failed to send email: ${result.message}`);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while sending the email.");
//   }
// });
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzXqwWf5kMlymVYslvxzd6YPLGj_dQl8BGXmGvzSLxY9Ez1iMkH8_NcBLpNK90KUlxB/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
