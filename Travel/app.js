function toggleMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
}

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
document.querySelector(".navbar").addEventListener("click", toggleMenu);
document.querySelector(".nav-links").addEventListener("click", toggleMenu);

const bookButtons = document.querySelectorAll(".reserver-btn");
for (let i = 0; i < bookButtons.length; i++) {
  bookButtons[i].addEventListener("mouseover", function (e) {
    let currentLanguage = localStorage.getItem("language") || "en";

    this.classList.add("whatsapp-btn");
    this.classList.remove("btn");
    if (currentLanguage === "en" || currentLanguage === "tr") {
      this.innerHTML = "WhatsApp";
    } else if (currentLanguage === "ar") {
      this.innerHTML = "واتساب";
    }
    this.href =
      "https://wa.me/2347030000000?text=Hello%20I%20would%20like%20to%20make%20a%20reservation%20for%20a%20room";
  });

  bookButtons[i].addEventListener("mouseout", function (e) {
    let currentLanguage = localStorage.getItem("language") || "en";

    this.classList.add("btn");
    this.classList.remove("whatsapp-btn");

    if (currentLanguage === "en") {
      this.innerHTML = "Book Now";
    } else if (currentLanguage === "ar") {
      this.innerHTML = "احجز الآن";
    } else if (currentLanguage === "tr") {
      this.innerHTML = "Réserver maintenant";
    }
  });
}

const textElement = document.getElementById("textElement");
const phrases = ["Tokyo", "Paris", "New York", "London", "Dubai"];

let currentPhraseIndex = 0;

function changeText() {
  let currentLanguage = localStorage.getItem("language") || "en";

  if (currentLanguage === "en") {
    phrases[0] = "Tokyo";
    phrases[1] = "Paris";
    phrases[2] = "New York";
    phrases[3] = "London";
    phrases[4] = "Dubai";
  } else if (currentLanguage === "ar") {
    phrases[0] = "طوكيو";
    phrases[1] = "باريس";
    phrases[2] = "نيويورك";
    phrases[3] = "لندن";
    phrases[4] = "دبي";
  } else if (currentLanguage === "tr") {
    phrases[0] = "Tokyo";
    phrases[1] = "Paris";
    phrases[2] = "New York";
    phrases[3] = "London";
    phrases[4] = "Dubai";
  }

  textElement.textContent = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

setInterval(changeText, 3000);

const bookButtons2 = document.querySelectorAll(".btn2");
for (let i = 0; i < bookButtons2.length; i++) {
  bookButtons2[i].addEventListener("mouseover", function (e) {
    if (currentLanguage === "en" || currentLanguage === "tr") {
      this.innerHTML = "WhatsApp";
    } else if (currentLanguage === "ar") {
      this.innerHTML = "واتساب";
    }
  });
  bookButtons2[i].addEventListener("mouseout", function (e) {
    if (currentLanguage === "en") {
      this.innerHTML = "Book Now";
    } else if (currentLanguage === "ar") {
      this.innerHTML = "احجز الآن";
    } else if (currentLanguage === "tr") {
      this.innerHTML = "Réserver maintenant";
    }
  });
}
const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// For the elements to fade in when they are in the viewport
const allElements = document.querySelectorAll(".fade-in");
const options = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.style.animation = `fadeIn 1s ease-out`;
      observer.unobserve(entry.target);
    });
  },

  options
);

allElements.forEach((element) => {
  observer.observe(element);
});
