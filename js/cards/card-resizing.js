function setCardHeight() {
  const cardFront = document.querySelector('.card-front');
  const cardContainer = document.querySelector('.card-container');
  const cardFrontHeight = cardFront.offsetHeight;
  console.log('Card height: ' + cardFrontHeight + 'px');
  cardContainer.querySelectorAll('.card').forEach((card) => {
    card.style.height = cardFrontHeight + 'px';
  });
}

function initializeCardHeight() {
  setCardHeight();
  window.addEventListener('resize', setCardHeight);
}

document.addEventListener('DOMContentLoaded', initializeCardHeight);
