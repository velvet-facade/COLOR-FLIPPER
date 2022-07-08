const colors = 
[
    'green', 
    'red' , 
    'pink', 
    'gray', 
    'rebeccapurple', 
    'yellow', 
    'orange', 
    'olive', 
    'navy', 
    'blue', 
    'aqua' , 
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.round(Math.random()* colors.length);
}