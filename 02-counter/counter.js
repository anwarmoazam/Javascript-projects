let count = 0;

let btns = document.querySelectorAll('.btn');
let value = document.getElementById('value');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.target.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222'
        }
        value.textContent = count;
    })
})