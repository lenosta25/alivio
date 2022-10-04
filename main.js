// burger-menu
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav");
const link = document.querySelectorAll(".nav__list-item");
const blackout = document.querySelector(".blackout");
const body = document.body;

burger.addEventListener("click", function () {
  mobileNav.classList.toggle("_active");
 burger.classList.toggle("_active");
 blackout.classList.toggle("_active");
  body.classList.toggle("_disable-skroll");
});

link.forEach((e) => {
  e.addEventListener("click", () => {
    mobileNav.classList.remove("_active");
    burger.classList.remove("_active");
    blackout.classList.remove("_active");
    body.classList.remove("_disable-skroll");
  });
});
// video
window.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("#video");
  const videoBtn = document.querySelector("#video-btn");

  videoBtn.addEventListener("click", function () {
    if (video.classList.contains("ready")) {
      return;
    }
    video.classList.add("ready");
    let src = video.dataset.src;
    video.insertAdjacentHTML(
      "afterbegin",
      '<iframe  src="' +
        src +
        '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
});
