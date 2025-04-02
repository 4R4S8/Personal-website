// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector("header").offsetHeight;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  });
});

// Theme Toggle Functionality
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  themeToggle.innerHTML =
    savedTheme === "light"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update toggle icon
  themeToggle.innerHTML =
    newTheme === "light"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
});

// Contact Form Handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic form validation
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message
    contactForm.reset();
    alert("Thank you for your message! I will respond shortly.");
  });
}

// Intersection Observer for scroll animations
const fadeElements = document.querySelectorAll(".fade-in");
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

fadeElements.forEach((element) => {
  observer.observe(element);
});