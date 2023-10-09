document.addEventListener("DOMContentLoaded", function () {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("myModal");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("opacity-100");
    modal.classList.remove("opacity-0");
    modal.style.pointerEvents = "auto";
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    modal.style.pointerEvents = "none";
  }
});
