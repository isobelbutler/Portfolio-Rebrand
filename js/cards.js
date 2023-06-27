// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = cardContainer.querySelectorAll('.card');


// Update the card here
let cards = [
    {
    name: 'front',
    title: 'HTML',
    description: 'API Requests',
},{
    title: 'HTML',
    description: 'API Requests',
},{
    name: 'front',
    title: 'Beak',
    description: 'API Requests',
},{
    title: 'HTML',
    description: 'API Requests',
},{
    name: 'front',
    title: 'HTML',
    description: 'API Requests',
},{
    title: 'HTML',
    description: 'API Requests',
}
]

// Creates the card HTML for the front of each card
function getCards(card, i) {
    cardHtml += `
        <div class="card black-border">
            <div class="card-front">
                <div class="card-heading center round-image">
                    <p>${cards[i].title}</p>
                </div>
                <p class="card-desc">${cards[i].description}</p>
                <a href="#" class="card-btn action-button">&#8594</a>
            </div>

            <div class="card-back">
                <div class="card-heading center round-image">
                    <p>${cards[i].title} BACK </p>
                </div>
                <p class="card-desc">${cards[i].description} BACK</p>
                <a href="#" class="card-btn action-button">&#8594</a>
            </div>
        </div>
    `
    
}

// Iterates through the card array and renders the front of each card on the DOM
cards.forEach(getCards);
cardContainer.innerHTML = cardHtml;

cardContainer.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('flipCard');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const cardFront = document.querySelector('.card-front');
    const card = cardContainer.querySelector('.card');  


    function setCardHeight() {
    const cardFrontHeight = cardFront.offsetHeight;
    console.log(cardFrontHeight);

    cardContainer.querySelectorAll('.card').forEach(card => {
        card.style.height = cardFrontHeight + 'px';
      });
  }
  
  // Initial height calculation
  setCardHeight();
  
  // Recalculate height when the window is resized
  window.addEventListener('resize', setCardHeight);
});


  
  
  
  