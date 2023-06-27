cardContainer.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('flipCard');
    });
  });

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