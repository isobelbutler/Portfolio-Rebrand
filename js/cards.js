// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = document.querySelector('.card');

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
document.querySelector('.card-container').innerHTML = cardHtml;

cardContainer.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('flipCard');
    });
  });