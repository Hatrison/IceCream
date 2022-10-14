(() => {
  const refs = {
    openModalBtn: document.querySelector('[read-more-modal-open]'),
    closeModalBtn: document.querySelector('[read-more-modal-close]'),
    modal: document.querySelector('[read-more-modal]'),
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
