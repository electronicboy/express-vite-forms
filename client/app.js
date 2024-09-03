const form = document.getElementById('message-form');
const messageContainerElement = document.getElementById('message-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    fetch("http://localhost:8081/message", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
    })

})


fetch("http://localhost:8081/messages").then(response => response.json()).then(data => {
    console.log(data)
    for(let entry of data) {
        const username = entry.username;
        const message = entry.message;
        let bookEntry = document.createElement('div');

        let userHolder = document.createElement('span');
        userHolder.textContent = username;
        let messageHolder = document.createElement('p');
        messageHolder.textContent = message;

        bookEntry.appendChild(userHolder);
        bookEntry.appendChild(messageHolder);

        document.getElementById('message-container').appendChild(bookEntry);

    }
})
