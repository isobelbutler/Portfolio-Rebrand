let navlink = document.querySelectorAll('.brackets');

function linkBracket() {
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].insertAdjacentHTML('afterbegin', '<');
        navlink[i].insertAdjacentHTML('beforeend', '>');
    }
    console.log('Navbar link brackets added');
};

linkBracket();
