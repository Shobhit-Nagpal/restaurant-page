
const loadContact = () => {
    const header = document.createElement('h1');
    header.textContent = 'Contact us!'

    const content = document.querySelector('#content');

    content.appendChild(header);
}

export {loadContact}