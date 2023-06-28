// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = cardContainer.querySelectorAll('.card');

// Update the card here
let cards = [
    {
    title: 'Space News',
    description: 'API Requests',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Travel Agency',
    description: 'Git and Github',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Soak Services',
    description: 'Client Website',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Wealden Green Party',
    description: 'Client Website',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Personal Website',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},{
    title: 'Farming Game',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Movie Data',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Hobby Page',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

},{
    title: 'Wealden Green Party',
    description: 'Client Website',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
                <a href="#" class="card-btn round-image"><p>&#8594</p></a>
            </div>

            <div class="card-back">
                <p class="card-heading-back">${cards[i].title}</p>
                <div class="card-circle"></div>
                <p class="card-project-info">${cards[i].info}</p>
                <img src="../../images/elephants-grazing.jpeg" class="card-image">

                <p class="card-desc">${cards[i].description}</p>
                <a href="#" class="card-btn round-image"><p>&#8594</p></a>

                
            </div>
        </div>
    `
}

// Iterates through the card array and renders the front of each card on the DOM
cards.forEach(getCards);
cardContainer.innerHTML = cardHtml;



function setCardHeight() {
    const cardFront = document.querySelector('.card-front');
    const cardContainer = document.querySelector('.card-container');
    const cardFrontHeight = cardFront.offsetHeight;
    console.log('Card height: ' + cardFrontHeight + 'px');
    cardContainer.querySelectorAll('.card').forEach(card => {
      card.style.height = cardFrontHeight + 'px';
    });
  }
  
function initializeCardHeight() {
    setCardHeight();
    window.addEventListener('resize', setCardHeight);
  }
  
document.addEventListener('DOMContentLoaded', initializeCardHeight);

 