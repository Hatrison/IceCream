(() => {
    const refs = {
      openModalBtn: document.querySelector('[our-locations-modal-open]'),
      closeModalBtn: document.querySelector('[our-locations-modal-close]'),
      modal: document.querySelector('[our-locations-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  