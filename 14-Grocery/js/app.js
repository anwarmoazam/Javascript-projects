const item = document.getElementById('grocery');
const form = document.querySelector('.grocery-form');

item.addEventListener('input',function(e){
    console.log(item.value);
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(item.value);
})