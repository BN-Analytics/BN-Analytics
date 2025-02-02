// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", function () {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
});
