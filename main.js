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
