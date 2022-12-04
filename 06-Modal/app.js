const btnModel = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn');

btnModel.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal')
})

btnClose.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal');
})