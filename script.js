document
  .querySelector(".dark-mode-toggle")
  .addEventListener("click", (e) =>
    localStorage.setItem("theme", e.target.checked ? "dark" : "light")
  );

const revealObserver = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  })
);

document
  .querySelectorAll(".tech-grid li")
  .forEach((e) => revealObserver.observe(e));

document.querySelectorAll(".card").forEach((e) =>
  e.addEventListener("click", () => {
    e.classList.toggle("card--expand");
  })
);
