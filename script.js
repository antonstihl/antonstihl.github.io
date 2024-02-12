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
    e.querySelector(".accordion-button")?.classList?.toggle(
      "accordion-button--open"
    );

    if (e.id === "ikea") {
      e.classList.toggle("ikea-theme");
    } else if (e.id === "nordnet") {
      e.classList.toggle("nordnet-theme");
    } else if (e.id === "evry") {
      e.classList.toggle("evry-theme");
    } else if (e.id === "chs") {
      e.classList.toggle("chs-theme");
    }
  })
);
