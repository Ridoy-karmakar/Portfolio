const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
    document
      .querySelectorAll(".nav-links a")
      .forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  document.getElementById("formNote").textContent =
    "Opening your email app with the message prepared…";
  window.location.href = `mailto:ridoykarmakar@gmail.com?subject=${subject}&body=${body}`;
});
