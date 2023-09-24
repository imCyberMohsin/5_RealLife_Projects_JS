//* Multiple Image Hover Script

//? For Element 1 Only
// var element1 = document.querySelector('#elem1');
// var image1 = document.querySelector('#img1');

// element1.addEventListener('mousemove', (dets) => {
//     image1.style.left = dets.x + 'px';
//     image1.style.top = dets.y + 'px';
// })
// element1.addEventListener('mouseenter', (dets) => {
//     image1.style.opacity = '1';
// })
// element1.addEventListener('mouseleave', (dets) => {
//     image1.style.opacity = '0';
// })

//? For All Elements
const elements = document.querySelectorAll('.elem');
const images = document.querySelectorAll('.img');

elements.forEach((elem) => {
    // console.log(elem);
    // console.log(elem.childNodes[3]);

    elem.addEventListener('mouseenter', () => {
        elem.childNodes[3].style.opacity = '1';
    })
    elem.addEventListener('mouseleave', () => {
        elem.childNodes[3].style.opacity = '0';
    })
    elem.addEventListener('mousemove', (dets) => {
        elem.childNodes[3].style.left = dets.x + 'px';
        // elem.childNodes[3].style.top = dets.y + 'px';
    })
})