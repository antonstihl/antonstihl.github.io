const thumbnail = document.querySelector(".thumbnail-hide");
const pageTitle = document.querySelector(".page_title");
const pic = document.getElementById("portrait");

const imgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        thumbnail.classList.add("thumbnail-show");
        pageTitle.classList.add("page_title--padding");
      }
      if (entry.isIntersecting) {
        thumbnail.classList.remove("thumbnail-show");
        pageTitle.classList.remove("page_title--padding");
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
