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
  { rootMargin: "-78px", threshold: 0.05 }
);

imgObserver.observe(pic);
