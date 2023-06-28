// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = cardContainer.querySelectorAll('.card');

// Update the card here
let cards = [
    {
    title: 'Space News',
    description: 'API Requests',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://isobelbutler.github.io/Space-News-Project/'

},{
    title: 'Travel Agency',
    description: 'Git and Github',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://fac28.github.io/Thornberry-Adventure-Agency/'

},{
    title: 'Soak Services',
    description: 'Client Website',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://www.soak.services/'

},{
    title: 'Wealden Green Party',
    description: 'Client Website',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://wealden.greenparty.org.uk/',

},{
    title: 'Bootcamp Application Website',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://isobelbutler.github.io/Website/',

},{
    title: 'Farming Game',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg'
    link: 'https://isobelbutler.github.io/Game/',

},{
    title: 'Movie Data',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://isobelbutler.github.io/Movie-Data/',

},{
    title: 'Hobby Page',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'elephants-grazing.jpeg',
    link: 'https://isobelbutler.github.io/Hobby-Page/',

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
                <img src="../../images/${cards[i].imageFileName}" class="card-image">

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

 