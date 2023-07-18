const firstCard = cardContainer.querySelector('.card');

function firstCardToggleOn() {
  firstCard.classList.toggle('flipCard');
}

// firstCardToggleOn();

cardContainer.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.classList.toggle('flipCard');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.toggle('flipCard');
  });

  card.addEventListener('click', () => {
    card.classList.toggle('flipCard');
  });
});

// Could be worth adding something to tell a mobile-user to click on a card

//   // Define a function for the card click event
// function handleCardClick(e) {
//   e.target.classList.toggle('flipCard');
// }

// // Add event listeners to each card
// function addCardEventListeners() {
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     card.addEventListener('click', handleCardClick);
//   });
// }

// // Call the function to add event listeners to the cards
// addCardEventListeners();
