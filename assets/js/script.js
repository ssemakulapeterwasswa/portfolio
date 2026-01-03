// Animate skill bars when in view
document.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-bar div").forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("style").split("width: ")[1];
    }
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});