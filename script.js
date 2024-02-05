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

document.querySelectorAll(".thing").forEach((e) =>
  e.addEventListener("click", () => {
    e.classList.toggle("hide-thing-content");
    e.querySelector(".accordion-button")?.classList?.toggle(
      "accordion-button--open"
    );
  })
);
