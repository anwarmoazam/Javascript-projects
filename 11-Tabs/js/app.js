const btnContainer = document.getElementById('my-btn');
const aboutContent = document.querySelectorAll('.content')

btnContainer.addEventListener('click', function (event) {
    const currentElement = event.target.tagName.toLowerCase().trim();
    if (currentElement === 'button') {
        const btn = event.target.getAttribute('data-id');
        aboutContent.forEach(function(article){
            article.classList.remove('active');
            if(article.id === btn){
                article.classList.add('active');        
            }

        });
    }
});

