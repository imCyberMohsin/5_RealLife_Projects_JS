//* Insta Story Script<div class="story">

const arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
        story: "https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    },
    {
        dp: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1782&q=80",
        story: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1782&q=80",
    },
    {
        dp: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    
];

var clutter = "";

arr.forEach((elem, index) =>{
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
    </div>`
})

//? Getting Elements
const storyContainer = document.querySelector('.story-container');
const fullScreeImage = document.querySelector('.full-scrren-image');

// Appending The Div to The story-container
storyContainer.innerHTML = clutter;

//? Event Listeners
storyContainer.addEventListener("click", (details) => {
    // console.log(arr[details.target.id].story);
    const gallerImg = arr[details.target.id].story;
    fullScreeImage.style.display = 'block';
    fullScreeImage.style.backgroundImage = `url("${gallerImg}")`;

    // Remove Story
    setTimeout(()=>{
        fullScreeImage.style.display = 'none';
    }, 3000)
}) 














//? Dynamic .story function
// const makeStory = () => {
//     // Creating story div
//     const story = document.createElement('div');
//     // Adding Class to Story div
//     story.classList.add('story');
//     // Appending story div to story-container
//     storyContainer[0].appendChild(story);
// }


//? Calls
// makeStory();
