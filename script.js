//Initial value

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('input');
const li = document.querySelector('li')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'))

//function that create the LI

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li)
}

function del() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
};

//Get input

function getInput() {
      if (input.value == "") {
        alert("you must enter something");
    } else {


        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(input.value);
        input.value = "";
    }

};

data.forEach(item => {
    liMaker(item);
})