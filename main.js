// burger-menu
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav");
burger.addEventListener("click", function () {
  mobileNav.classList.toggle("mobile-nav-active");
  burger.classList.toggle("burger-close");
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
