const form = document.getElementById('message-form');
const messageContainerElement = document.getElementById('message-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    fetch("https://express-vite-forms.onrender.com/message", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).catch((error) => {
        const errorElement = document.createElement('p')
        errorElement.innerHTML = error.message;
        form.appendChild(errorElement)
    }).then(response => {
        if (response != null) {
            return response.json();
        }
        return null;
    }).then(data => {
        if (data != null) {
            addEntry(data)
        }
    })

})


fetch("https://express-vite-forms.onrender.com/messages").then(response => response.json()).then(data => {
    console.log(data)
    for (let entry of data) {
        addEntry(entry);

    }
}).catch((error) => {
    const errorElement = document.createElement('p')
    errorElement.innerHTML = error.message;
    form.appendChild(errorElement)
})

function addEntry(entry) {
    const username = entry.username;
    const message = entry.message;
    let bookEntry = document.createElement('div');

    let userHolder = document.createElement('span');
    userHolder.textContent = username;
    let messageHolder = document.createElement('p');
    messageHolder.textContent = message;

    bookEntry.appendChild(userHolder);
    bookEntry.appendChild(messageHolder);

    messageContainerElement.appendChild(bookEntry);
}
