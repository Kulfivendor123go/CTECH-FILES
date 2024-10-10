let text = document.getElementById('text')
let hill1 = document.getElementById('hill1')
let hill2 = document.getElementById('hill2')
let hill3 = document.getElementById('hill3')
let hill4 = document.getElementById('hill4')
let day = document.getElementsByClassName('body')

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px';
    hill1.style.left = value * 1.5 + 'px';
    hill2.style.left = value * 1.5 + 'px';
    hill3.style.left = value * -1.5 + 'px';
    hill4.style.top = value * 1.5 + 'px';
});