const colors = ['green','red','blue','rgba(133,122,200)','#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    const colorName = getRandomColor();
    document.body.style.backgroundColor = colors[colorName];
    color.textContent = colors[colorName];
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}