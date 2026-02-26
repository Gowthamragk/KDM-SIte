document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".ll-card");
  const container = document.querySelector(".card-row");

  // Handle card click (expand / switch)
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent document click

      const isActive = card.classList.contains("active");

      // Reset all cards
      cards.forEach(c => c.classList.remove("active"));
      container.classList.remove("has-active");

      // Activate clicked card if it was not active
      if (!isActive) {
        card.classList.add("active");
        container.classList.add("has-active");
      }
    });
  });

  // Click outside cards → collapse all
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".ll-card")) {
      cards.forEach(c => c.classList.remove("active"));
      container.classList.remove("has-active");
    }
  });
});
