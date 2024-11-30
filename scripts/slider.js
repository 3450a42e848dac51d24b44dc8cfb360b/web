document.addEventListener("DOMContentLoaded", _ => {
  const splide = new Splide(".splide", {
    type: "loop",
    width: "100%",
    height: "700px",
    padding: "30px",
    autoplay: true,
    interval: 3000,
  })
  splide.mount()
})
