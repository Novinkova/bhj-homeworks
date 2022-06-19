const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const modalClose = document.querySelectorAll('.modal__close_times');
const btnDanger = document.querySelector('.btn_danger');

modalSuccess.style.display = 'none';

btnDanger.onclick = () => modalSuccess.style.display = 'flex';

for (let i = 0; i < modalClose.length; i++) {
  const close = modalClose[i];

  close.onclick = () => {
    modalMain.style.display = 'none';
    modalSuccess.style.display = 'none';
  }
}