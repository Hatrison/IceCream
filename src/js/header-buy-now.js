(() => {
  const refs = {
    openModalBtn: document.getElementById('buy-now-modal-open'),
    openModalBtnMobile: document.getElementById('buy-now-modal-open-mobile'),
    closeModalBtn: document.getElementById('buy-now-modal-close'),
    modal: document.getElementById('buy-now-modal'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', locking);
  refs.openModalBtnMobile.addEventListener('click', locking);
  refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function locking() {
    body.classList.toggle('locked');
  }
})();
