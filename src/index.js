import { loadLanding } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu"
import { removeContents } from "./remove";

loadLanding();

const headerBtns = document.querySelectorAll('button');

headerBtns.forEach( (button) => {
    button.addEventListener('click', () => {
        removeContents();
        
        if (button.id === 'home') {
            loadLanding();
        }
        else if (button.id === 'menu') {
            loadMenu();
        }
        else {
            loadContact();
        }
    })
});