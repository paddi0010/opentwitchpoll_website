// Typing-Effekt für Hero-Titel
const typed = document.getElementById("typed");
const titleText = "OpenTwitchPoll";
let charIndex = 0;

function typeTitle() {
  if (charIndex < titleText.length) {
    typed.innerHTML += titleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeTitle, 100); // Geschwindigkeit anpassen
  }
}

typeTitle();


const emailEl = document.getElementById("contact-email");
const feedbackEl = document.getElementById("copy-feedback");

emailEl.addEventListener("click", () => {
  navigator.clipboard.writeText(emailEl.textContent).then(() => {
    // Feedback anzeigen
    feedbackEl.classList.add("show");
    setTimeout(() => feedbackEl.classList.remove("show"), 1500);
  }).catch(err => {
    console.error("Fehler beim Kopieren: ", err);
  });
});

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Aktiver Link setzen
const links = document.querySelectorAll(".nav-link");
const currentPath = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPath = link.getAttribute("href");
  if(linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});




