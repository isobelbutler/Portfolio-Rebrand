let baseURL = 'https://isobelbutler.github.io/Portfolio-Rebrand/';

console.log('Contact script running');

const form = document.getElementById('contact-form');

const formEvent = form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = new FormData(form);
    sendMail(email);
})

const sendMail = (mail) => {
    fetch(`${baseURL}/send`, {
        method: 'POST',
        body: mail,
    }).then((response) => {
        return response.json();
    });
};