(() => {
  const refs = {
    openModalBtn: document.getElementById('products-modal-open'),
    openModalBtn2: document.getElementById('products-modal-open-2'),
    openModalBtn3: document.getElementById('products-modal-open-3'),
    openModalBtn4: document.getElementById('products-modal-open-4'),
    closeModalBtn: document.getElementById('products-modal-close'),
    modal: document.getElementById('products-modal'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', locking);
  refs.openModalBtn2.addEventListener('click', locking);
  refs.openModalBtn3.addEventListener('click', locking);
  refs.openModalBtn4.addEventListener('click', locking);
  refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function locking() {
    body.classList.toggle('locked');
  }
})();
