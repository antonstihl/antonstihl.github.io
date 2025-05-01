document
  .querySelector(".dark-mode-toggle")
  .addEventListener("click", (e) =>
    localStorage.setItem("theme", e.target.checked ? "dark" : "light")
  );
