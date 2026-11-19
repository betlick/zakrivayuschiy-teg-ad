// Имена классов совместимы с прекодом Практикума.
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');
const buttonTimers = new WeakMap();

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', () => toggleIsLiked(index));
});
likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', () => toggleIsLiked(index));
});

function toggleIsLiked(index) {
  const heart = likeHeartArray[index];
  const button = likeButtonArray[index];
  const isLiked = heart.classList.toggle('is-liked');
  button.setAttribute('aria-pressed', String(isLiked));
  iconButtonArray[index].setAttribute('aria-pressed', String(isLiked));
  // При быстрых кликах отменяем предыдущую отложенную смену подписи.
  clearTimeout(buttonTimers.get(button));
  buttonTimers.set(button, setTimeout(() => {
    button.querySelector('.button__text').textContent = isLiked ? 'Unlike' : 'Like';
  }, 500));
}
