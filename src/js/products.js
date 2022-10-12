(() => {
  const refs = {
    openModalBtn: document.querySelector('[products-modal-open]'),
    closeModalBtn: document.querySelector('[products-modal-close]'),
    modal: document.querySelector('[products-modal]'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', locking);
  refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function locking() {
    body.classList.toggle('locked');
  }
})();
