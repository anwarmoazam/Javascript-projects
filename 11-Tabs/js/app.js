const btnContainer = document.getElementById('my-btn');
const aboutContent = document.querySelectorAll('.content')

btnContainer.addEventListener('click', function (event) {
    const clickedElement = event.target.tagName.toLowerCase().trim();
    if (clickedElement === 'button') {
        const clickedElementId = event.target.getAttribute('data-id');
        const btns = btnContainer.querySelectorAll('.tab-btn')
        btns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        aboutContent.forEach(function(article){
            article.classList.remove('active');
            if(article.id === clickedElementId){
                article.classList.add('active');        
            }
        });
    }
});