(() => {
  const refs = {
    openModalBtn: document.getElementById('franchise-modal-open'),
    closeModalBtn: document.getElementById('franchise-modal-close'),
    modal: document.getElementById('franchise-modal'),
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
