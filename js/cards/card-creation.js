// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = cardContainer.querySelectorAll('.card');

// Update the card here
let cards = [
    {title: 'Reminders App',
    description: 'F&C Project: Writing Tests',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'reminders2.png',
    link: 'https://eunbyulna.github.io/FAC-TEST/'
}, {
    title: 'API Requests',
    description: 'F&C Project: HTTP',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'space-news-form.png',
    link: 'https://isobelbutler.github.io/Space-News-Project/'

},{
    title: 'Travel Agency',
    description: 'F&C Project: Git and GitHub',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'travel-agency.png',
    link: 'https://fac28.github.io/Thornberry-Adventure-Agency/'

},{
    title: 'Soak Services',
    description: 'Professional Project',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'soak-services.png',
    link: 'https://www.soak.services/'

},{
    title: 'Wealden Green Party',
    description: 'Professional Project',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'wealden.png',
    link: 'https://wealden.greenparty.org.uk/',

},{
    title: 'Personal Website',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'application-website.png',
    link: 'https://isobelbutler.github.io/Website/',

},{
    title: 'Farming Game',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'farm-game.png',
    link: 'https://isobelbutler.github.io/Game/',

},{
    title: 'Movie Database',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'movie-data.png',
    link: 'https://isobelbutler.github.io/Movie-Data/',

},{
    title: 'Hobby Page',
    description: 'F&C Application',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageFileName: 'hobby-page.png',
    link: 'https://isobelbutler.github.io/Hobby-Page/',

}

]

// Creates the card HTML for the front of each card
function getCards(card, i) {
    cardHtml += `
        <div class="card ">
            <div class="card-front">
                <div class="card-heading center round-image">
                    <!-- <p class="center-text">${cards[i].title}</p> -->
                    <img src="images/${cards[i].imageFileName}" class="card-image round-image" alt="Project website rendered onto device">

                    
                </div>
                <p class="card-desc">${cards[i].title}</p>
                <a href="#" class="card-btn round-image"><p>&#8594</p></a>
            </div>

            <div class="card-back">
                <p class="card-heading-back center-text">${cards[i].description}</p>
                <!-- <div class="card-circle"></div> -->
                <p class="card-project-info">${cards[i].info}</p>
                <!-- <img src="images/${cards[i].imageFileName}" class="card-image round-image" alt="Project website renderd onto laptop"> -->

                <p class="card-desc"></p>
                <a href="${cards[i].link}" target="_blank" class="card-btn"><img src="images/link.png" class="round-image" alt="External link symbol"></a>

                
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

 