let baseURL = 'http://127.0.0.1:5500/index.html';

console.log('Contact script running');

const form = document.getElementById('contact-form');

const formEvent = form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = new FormData(form);
    sendMail(email);
})

const sendMail = (email) => {
    fetch(`${baseURL}/send`, {
        method: 'POST',
        body: email,
    }).then((response) => {
        return response.json();
    });
};