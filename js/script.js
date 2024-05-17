const btnOpenEl = document.querySelector(".btn-burger");
const btnCloseEl = document.querySelector(".mobile-menu-btn-close");
const headerEl = document.querySelector(".mobile-menu");
const btnModalOpenEl = document.querySelector(".button");
const btnModalCloseEl = document.querySelector(".btn-close");
const modalEl = document.querySelector(".modal-overlay");

btnOpenEl.addEventListener("click", function () {
  headerEl.classList.add("is-open");
});

btnCloseEl.addEventListener("click", function () {
  headerEl.classList.remove("is-open");
});

btnModalOpenEl.addEventListener("click", function () {
  modalEl.classList.add("is-open");
});

btnModalCloseEl.addEventListener("click", function () {
  modalEl.classList.remove("is-open");
});
