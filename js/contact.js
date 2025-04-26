const contactButtons = document.querySelectorAll('.js-contactButton')
const contactContents = document.querySelectorAll('.js-contactContent')
const contactWrapper = document.querySelector('.js-contactWrapper')
const form = document.querySelector('.form');

window.addEventListener('DOMContentLoaded', () => {
    contactButtons.forEach(button => {
        button.addEventListener('click', (e => {
            const name = e.target.dataset.name
            contactButtons.forEach(button => {
                button.classList.remove('is-show')
                e.target.classList.add('is-show')
            })
        
            contactContents.forEach(content => {
                content.classList.remove('is-show')
                if (content.dataset.name == name) {
                    content.classList.add('is-show')
                }
            })
        }))
    })
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('There was an error. Please try again!');
        }
    });
});