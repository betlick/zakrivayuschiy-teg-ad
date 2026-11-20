const memoryDialog = document.querySelector('#memory-dialog');
const saveButton = document.querySelector('.save__button');
const closeButton = document.querySelector('.memory-dialog__button');

saveButton.addEventListener('click', () => {
  memoryDialog.showModal();
});

closeButton.addEventListener('click', () => {
  memoryDialog.close();
});
