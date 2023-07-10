(() => {
  const refs = {
    openModalBtnHero: document.querySelector(".hero-modal-open"),
    openModalBtnVegetables: document.querySelector(".vegetables-modal-open"),
    closeModalBtn: document.querySelector(".data-modal-close"),
    modal: document.querySelector(".data-modal"),
  };

  refs.openModalBtnHero.addEventListener("click", toggleModal);
  refs.openModalBtnVegetables.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();