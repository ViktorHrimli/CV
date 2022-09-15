export function scrolTo(listener, num) {
  const { height: cardHeight } = document
    .querySelector(listener)
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * num,
    behavior: 'smooth',
  });
}
