const btnToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const btnClose = document.querySelector('.close-btn');

btnToggle.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
})

btnClose.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})