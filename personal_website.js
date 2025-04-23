console.log("Hello World");
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // You can validate inputs here if needed
      window.location.href = "success.html";
    });
  });
  