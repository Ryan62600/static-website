document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      const isOpen = mainNav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  const liveClockEl = document.getElementById("liveClock");

  function updateLiveClock() {
    if (!liveClockEl) return;
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = String(hours).padStart(2, "0");

    liveClockEl.textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
  }

  if (liveClockEl) {
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
  }

  const countdownEl = document.getElementById("countdownDisplay");

  if (countdownEl) {
    const eventDate = new Date("September 26, 2027 09:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        countdownEl.textContent = "The festival has started! 🏄";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent =
        `${String(days).padStart(2, "0")} Days | ` +
        `${String(hours).padStart(2, "0")} Hours | ` +
        `${String(minutes).padStart(2, "0")} Minutes | ` +
        `${String(seconds).padStart(2, "0")} Seconds`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4500);
  }

  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(openItem => {
        if (openItem !== item) openItem.classList.remove("open");
      });

      item.classList.toggle("open", !wasOpen);
      btn.querySelector(".icon").textContent = !wasOpen ? "–" : "+";
    });
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const tourCards = document.querySelectorAll(".tour-card");

  if (filterButtons.length && tourCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("btn-dark"));
        filterButtons.forEach(b => b.classList.add("btn-outline-dark"));
        btn.classList.add("btn-dark");
        btn.classList.remove("btn-outline-dark");

        const filter = btn.dataset.filter;
        tourCards.forEach(card => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "grid";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const nameField = document.getElementById("fullName");
      const emailField = document.getElementById("email");
      const destField = document.getElementById("destination");
      const messageField = document.getElementById("message");

      if (nameField.value.trim().length < 2) {
        setFieldError(nameField, true);
        isValid = false;
      } else {
        setFieldError(nameField, false);
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value.trim())) {
        setFieldError(emailField, true);
        isValid = false;
      } else {
        setFieldError(emailField, false);
      }

      if (!destField.value) {
        setFieldError(destField, true);
        isValid = false;
      } else {
        setFieldError(destField, false);
      }

      if (messageField.value.trim().length < 10) {
        setFieldError(messageField, true);
        isValid = false;
      } else {
        setFieldError(messageField, false);
      }

      const statusBox = document.getElementById("formStatus");

      if (isValid) {
        statusBox.textContent = "Salamat! Natanggap namin ang inyong inquiry — babalikan namin kayo sa loob ng 24 oras.";
        statusBox.className = "show success";
        contactForm.reset();
      } else {
        statusBox.textContent = "May mga field na kailangan pang ayusin sa itaas.";
        statusBox.className = "show";
      }
    });
  }

  function setFieldError(fieldEl, hasError) {
    const wrapper = fieldEl.closest(".field");
    if (!wrapper) return;
    wrapper.classList.toggle("invalid", hasError);
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

});