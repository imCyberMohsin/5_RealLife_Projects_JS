//* 3. Custom Cursor Script

const main = document.querySelector('.main');
const crsr = document.querySelector('.cursor');

// Mouse move event Listener
main.addEventListener('mousemove', (details) => {
    // console.log(details.x);
    // console.log(details.y);
    crsr.style.opacity = '1';
    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})