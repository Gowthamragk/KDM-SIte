document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cs-card");
  const container = document.querySelector(".card-row");

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      const isActive = card.classList.contains("active");

      cards.forEach(c => c.classList.remove("active"));
      container.classList.remove("has-active");

      if (!isActive) {
        card.classList.add("active");
        container.classList.add("has-active");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".cs-card")) {
      cards.forEach(c => c.classList.remove("active"));
      container.classList.remove("has-active");
    }
  });
});
