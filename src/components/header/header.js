function menuHeaderBehavior() {
  let oldScroll = 0;
  let heroHeader = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > oldScroll) {
      heroHeader.classList.add("hidden");
      oldScroll = currentScroll;
    } else {
      heroHeader.classList.remove("hidden");
      oldScroll = currentScroll;
    }
  });
}

export default menuHeaderBehavior;
