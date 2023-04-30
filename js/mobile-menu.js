(() => {
  const refs = {
    openMuneBtn: document.querySelector("[js-open-menu]"),
    closeMuneBtn: document.querySelector("[js-close-menu]"),
    menu: document.querySelector("[js-menu-container]"),
  };

  refs.openModalBtn.addEventListener("click", toggleMenu);
  refs.closeModalBtn.addEventListener("click", toggleMenu);
  refs.modal.addEventListener("click", (click) => {
    if (click.target === click.currentTarget) toggleModal();
  });
  function toggleMenu() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
