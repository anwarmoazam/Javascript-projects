// Select Items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

form.addEventListener('submit',addItem)

function addItem(e){
    const value = grocery.value;
    e.preventDefault();
    if(value && !editFlag){
        console.log('add item to the list');
    }
    else if(value && editFlag){
        console.log('editing');
    }
    else{
        displayAlert('please enter value','danger');
    }
}

// display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000)
}