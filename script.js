// ==========================================
// M. PRIYAN PORTFOLIO
// script.js
// ==========================================


// ==============================
// MOBILE MENU
// ==============================

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ==============================
// CLOSE MENU AFTER CLICK
// ==============================

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==============================
// STICKY NAVBAR SHADOW
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(139,30,45,.18)";

    } else {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.05)";

    }

});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// SCROLL REVEAL
// ==============================

const revealItems = document.querySelectorAll(

".about-container, .skill-card, .project-card, .resume-card, .contact-wrapper"

);

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// TYPING EFFECT
// ==============================

const typingElement = document.querySelector(".typing-text");

const words = [

"Digital Marketer",

"Social Media Manager",

"Video Editor"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


// ==============================
// CONTACT FORM (EMAILJS)
// ==============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_rm1smt5", "template_a9f0fus", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
    })
    .catch(function (error) {
        alert("❌ Failed to send message.");
        console.log(error);
    });
});

// ==============================
// SMOOTH BUTTON SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});
// ==============================
// ANIMATED PARTICLE BACKGROUND
// ==============================

tsParticles.load("home", {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#8b1e2d"
    },
    links: {
      enable: true,
      color: "#8b1e2d",
      distance: 150,
      opacity: 0.3
    },
    move: {
      enable: true,
      speed: 2
    },
    size: {
      value: 3
    },
    opacity: {
      value: 0.5
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  }
});