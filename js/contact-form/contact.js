let baseURL = 'file:///Users/isobelbutler/Library/Mobile%20Documents/com~apple~CloudDocs/Coding/Websites/portfolio/index.html';

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