// Variables

let cardHtml = '';
const cardContainer = document.querySelector('.card-container');
const cardInner = cardContainer.querySelectorAll('.card');

// Update the card here
let cards = [
  {
    title: 'Reminders App',
    description: 'F&C Project: Writing Tests',
    info: 'Build and write tests for a collaborative reminders tracker with create, delete, complete, and toggle functions.',
    focuses: [
      'Create automated tests that cover the key functions of the app.',
      'Practice Test-Driven Development.',
    ],
    imageFileName: 'reminders2.png',
    link: 'https://eunbyulna.github.io/FAC-TEST/',
  },
  {
    title: 'API Requests',
    description: 'F&C Project: HTTP',
    info: 'Build a collaborative app that queries three APIs and uses the results to update the DOM. The user must be able to sort and filter the received data.',
    focuses: [
      'Manage asynchronous tasks.',
      'Send HTTP requests using JavaScript and receive responses.',
    ],

    imageFileName: 'space-news-form.png',
    link: 'https://isobelbutler.github.io/Space-News-Project/',
  },
  {
    title: 'Travel Agency',
    description: 'F&C Project: Git and GitHub',
    info: 'Create an agency website in collaboration with one of my Founders and Coders peers.',
    focuses: [
      'Accessible, semantic HTML.',
      'Well-organised CSS.',
      'Mobile-first approach.',
      'Practice the Git/GitHub workflow.',
    ],
    imageFileName: 'travel-agency.png',
    link: 'https://fac28.github.io/Thornberry-Adventure-Agency/',
  },
  {
    title: 'Soak Services',
    description: 'Client Website',
    info: 'Design and build a clean, informative website for Soak Services, an infiltration testing company based in South-East England, to enhance their online presence.',
    focuses: [],

    imageFileName: 'soak-services.png',
    link: 'https://www.soak.services/',
  },
  {
    title: 'Green Party',
    description: 'Client Website',
    info: 'Redesign the Green Party constituency website, and migrate it to the WordPress platform.<p></p>I streamlined their content management process with WordPress templates to allow quick news and article updates.',
    // focuses: ['Enhance navigation and the user experience.'],
    focuses: [],
    imageFileName: 'wealden.png',
    link: 'https://wealden.greenparty.org.uk/',
  },
  {
    title: 'Personal Website',
    description: 'F&C Application',
    info: "Design and build a personal website which tells Founders and Coders about myself, why I want to attend the programme, and why I'd like to move into a career as a web developer.",
    focuses: [
      'Create a visually appealing user experience.',
      'Link to all other application projects.',
    ],
    imageFileName: 'application-website.png',
    link: 'https://isobelbutler.github.io/Website/',
  },
  {
    title: 'Farming Game',
    description: 'F&C Application',
    info: 'Build a game using HTML, CSS and JavaScript and explore creating something with different complex parts that interact with each other. I chose to build a farming game where a user collects gold coins by sowing and harvesting crops.',
    focuses: ['Write modular code that is reusable and repeatable.'],

    imageFileName: 'farm-game.png',
    link: 'https://isobelbutler.github.io/Game/',
  },
  {
    title: 'Movie Database',
    description: 'F&C Application',
    info: 'Build a UI that is populated with the data from a movie database JavaScript object.',
    focuses: [
      'Allow users to add their own film and interact with the data.',
      'Render the data onto the webpage with DOM Manipulation.',
      'Allow the user to update and interact with the data.',
    ],

    imageFileName: 'movie-data.png',
    link: 'https://isobelbutler.github.io/Movie-Data/',
  },
  {
    title: 'Hobby Page',
    description: 'F&C Application',
    info: 'Build a page about one of my hobbies, a particular interest of mine, or a public figure I admire. I chose to create a guide to the Sea to Sea cycling tour. Built with HTML, CSS, and JavaScript.',
    focuses: [],
    imageFileName: 'hobby-page.png',
    link: 'https://isobelbutler.github.io/Hobby-Page/',
  },
];

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
                <!-- <a href="#" class="card-btn round-image"><p>&#8594</p></a> -->
                <p class="card-btn round-image">&#8594</p>
            </div>

            <div class="card-back">
                <p class="card-desc">${cards[i].title}</p>

                <p class="card-heading-back center-text">${cards[i].description}</p>
                <!-- <div class="card-circle"></div> -->
                <div class="card-project-info">
                <p>Challenge:</p>
                <p>${cards[i].info}</p>
                <ul class="focus-list"></ul>
                </div>
                <!-- <img src="images/${cards[i].imageFileName}" class="card-image round-image" alt="Project website renderd onto laptop"> -->

                <p class="card-desc"></p>
                <a href="${cards[i].link}" target="_blank" class="card-btn"><img src="images/link.png" class="round-image" alt="External link symbol"></a>

                
            </div>
        </div>
    `;
}

// Iterates through the card array and renders the front of each card on the DOM
cards.forEach(getCards);
cardContainer.innerHTML = cardHtml;

// Iterates through the focuses of each item in the card array and renders them on the DOM
function createList() {
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
