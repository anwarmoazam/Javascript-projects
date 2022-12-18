const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const date = document.getElementById('date');

navToggle.addEventListener('click',function(){
    linksContainer.classList.toggle('show-links');
});

date.innerHTML = new Date().getFullYear();