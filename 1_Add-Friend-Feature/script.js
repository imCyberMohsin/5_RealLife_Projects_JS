//* 1. Add Friend Script

//? Getting elements
const btn = document.querySelector('.add');
const relation = document.querySelector('.relation');
let check = 0;  // Flag

//? Listeners
// Add/Remove with same Button Friends
btn.addEventListener('click', () => {
    if (check == 0) {
        relation.innerHTML = 'Friends';
        relation.style.color = '#0353a4'
        check = 1;
        btn.innerHTML = 'Remove';
    } else if (check == 1) {
        relation.innerHTML = 'Not Friends';
        relation.style.color = 'crimson';
        check = 0;
        btn.innerHTML = 'Add Friend';
    }
})
