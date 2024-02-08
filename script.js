const thumbnail = document.querySelector(".thumbnail-hide");
const pageTitle = document.querySelector(".page_title");
const header = document.querySelector(".header");
const pic = document.getElementById("portrait");

const imgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        thumbnail.classList.add("thumbnail-show");
      }
      if (entry.isIntersecting) {
        thumbnail.classList.remove("thumbnail-show");
      }
    });
  },
  { rootMargin: "-78px" }
);

imgObserver.observe(pic);

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
