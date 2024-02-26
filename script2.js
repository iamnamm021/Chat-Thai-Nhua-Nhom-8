let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1= document.getElementById('hill1'); 
let hill4 = document.getElementById('hill4');
let hills = document.getElementById('hills');
const minY = 800;
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if(value >= minY){
        text.style.marginTop = minY + 'px';
        leaf.style.top = minY + 'px';
        leaf.style.left = minY + 'px';
        hill5.style.left = minY + 'px'; 
        hill4.style.left = minY + 'px';
        hill1.style.top = minY + 'px';
    }
    else{
        text.style.marginTop = value * 2.5+ 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px'; 
        hill4.style.left = value *-1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }
});