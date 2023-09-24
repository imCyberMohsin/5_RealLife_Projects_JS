//* Insta Like Button Script 

//? Getting Elements
const image = document.querySelector('.image');
const likeBtn = document.querySelector('.like');

// Listener for Double Click on image
image.addEventListener('dblclick', () => {
    likeBtn.style.transform = 'translate(-50%, -50%) scale(1)';
    likeBtn.style.opacity = '0.9';

    // Like Button Disappear
    setTimeout(() => {
        likeBtn.style.opacity = '0';
    }, 500)

    setTimeout(() => {
        likeBtn.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 800)
    likeBtn.style.color = 'crimson';
})