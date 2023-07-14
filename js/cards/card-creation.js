// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = cardContainer.querySelectorAll('.card');

// Update the card here
let cards = [
    {title: 'Reminders App',
    description: 'F&C Project: Writing Tests',
    info: 'A collaborative reminders list tracker with create, delete, complete, and toggle functions.',
    focuses: ['Creating automated tests that cover the key functions of the app.'],
    imageFileName: 'reminders2.png',
    link: 'https://eunbyulna.github.io/FAC-TEST/'
}, {
    title: 'API Requests',
    description: 'F&C Project: HTTP',
    info: 'A collaborative space/Earth comparison app that queries three APIs and uses the results to update the DOM. The user can sort and filter the received data.',
    focuses: ['Managing asynchronous tasks.', 'Sending HTTP requests using JavaScript and receiving responses.'],

    imageFileName: 'space-news-form.png',
    link: 'https://isobelbutler.github.io/Space-News-Project/'

},{
    title: 'Travel Agency',
    description: 'F&C Project: Git and GitHub',
    info: 'A collaborative project for a fake travel agency.',
    focuses: ['Writing semantic HTML to aid accessibility.', 'Taking a mobile-first approach.', 'Practicising the Git workflow.'],
    imageFileName: 'travel-agency.png',
    link: 'https://fac28.github.io/Thornberry-Adventure-Agency/'

},{
    title: 'Soak Services',
    description: 'Client Website',
    info: 'A clean, informative website for Soak Services to enhance their online presence. I worked closely with the Soak Services team to ensure seamless integration of visual assets and alignment with brand guidelines.',
    focuses: [],

    imageFileName: 'soak-services.png',
    link: 'https://www.soak.services/'

},{
    title: 'Green Party',
    description: 'Client Website',
    info: 'Completely redesigned the Green Party constituency website, executing a seamless migration to the WordPress platform and delivering substantial enhancements to navigation and user experience. Worked with WordPress templates to facilitate quick news and article updates for the client, effectively streamlining their content management process.',
    focuses: [],

    imageFileName: 'wealden.png',
    link: 'https://wealden.greenparty.org.uk/',

},{
    title: 'Personal Website',
    description: 'F&C Application',
    info: 'My Founders and Coders main website application, complete with links to all other applicaton projects.',
    focuses: ['Create a slick website that expresses who I am visually and verbally.', 'Share why I\'d like to move into a career as a web developer.'],
    imageFileName: 'application-website.png',
    link: 'https://isobelbutler.github.io/Website/',

},{
    title: 'Farming Game',
    description: 'F&C Application',
    info: 'I built a simple farming game where a user collects gold coins by sowing and harvesting crops.',
    focuses: ['Write modular code that is reusable and repeatable.'],

    imageFileName: 'farm-game.png',
    link: 'https://isobelbutler.github.io/Game/',

},{
    title: 'Movie Database',
    description: 'F&C Application',
    info: 'Built a UI which is populated with the data from a movie database JavaScript object. Users can add their own film and toggle the displayed information.',
    focuses: ['Rendering the data onto the webpage with DOM Manipulation.', 'Allowing the user to update and interact with the data.'],

    imageFileName: 'movie-data.png',
    link: 'https://isobelbutler.github.io/Movie-Data/',

},{
    title: 'Hobby Page',
    description: 'F&C Application',
    info: 'Tasked with building a page dedicated to a hobby, I created a guide to the Sea to Sea cycling tour. Built with HTML, styled with CSS and uses a bit of JavaScript.',
    focuses: [],
    imageFileName: 'hobby-page.png',
    link: 'https://isobelbutler.github.io/Hobby-Page/',

}

]



// Creates the card HTML for each cards
function getCards(card, i) {
    cardHtml += `
        <div class="card">
            <div class="card-front">
                <div class="card-heading center round-image">
                    <!-- <p class="center-text">${cards[i].title}</p> -->
                    <img src="images/${cards[i].imageFileName}" class="card-image round-image" alt="Project website rendered onto device">

                    
                </div>
                <p class="card-desc">${cards[i].title}</p>
                <a href="#" class="card-btn round-image"><p>&#8594</p></a>
            </div>

            <div class="card-back">
                <p class="card-desc">${cards[i].title}</p>

                <p class="card-heading-back center-text">${cards[i].description}</p>
                <!-- <div class="card-circle"></div> -->
                <div class="card-project-info">
                <p>${cards[i].info}</p>
                <ul class="focus-list"></ul>
                </div>
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

// Iterates through the focuses of each item in the card array and renders them on the DOM
function createList(){    
    for (let i = 0; i < cards.length; i++) {
        let focusContainer = document.querySelectorAll('.focus-list');
        let focus = cards[i].focuses;
        
        if (focus.length > 0) {
            focusContainer[i].insertAdjacentHTML('beforebegin', '<p>Focuses:</p>');
        }

        for (let j = 0; j < focus.length; j++) {
            var li = document.createElement('li');
            li.innerText = focus[j];
            focusContainer[i].appendChild(li);    
        }
    }
}

createList();

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

 