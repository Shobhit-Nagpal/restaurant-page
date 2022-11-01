const loadMenu = () => {
    const header = document.createElement('h1');
    header.textContent = "Menu";

    const pizza = document.createElement('p');
    pizza.textContent = "Pizza";

    const burger = document.createElement('p');
    burger.textContent = "Burger";

    const pasta = document.createElement('p');
    pasta.textContent = "Pasta";

    const content = document.querySelector('#content');

    content.appendChild(header);
    content.appendChild(pizza);
    content.appendChild(pasta);
    content.appendChild(burger);
}

export { loadMenu }