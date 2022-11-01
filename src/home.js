const loadLanding = () => {
    const header = document.createElement('h1');
    header.textContent = "Mario's Own Restaurant";


    const copy = document.createElement('p');
    copy.textContent = "The best food, at Mario's."


    const content = document.querySelector('#content');

    content.appendChild(header);
    content.appendChild(copy);
}

export {loadLanding}