(() => {
  document.addEventListener("DOMContentLoaded", _ => {
    const timing = performance.timing
    const loadTimeMs = timing.domContentLoadedEventStart - timing.navigationStart;
    document.getElementById("timing").textContent = `Время загрузки страницы: ${loadTimeMs} мс`

    document
      .querySelectorAll(".header__nav-item")
      .forEach(el => {
        if (document.location.href.endsWith(el.href)) {
          el.classList.add("header__nav-item_active")
        }
      })
    })
})()
