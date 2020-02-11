const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['blue', 'green', 'turquoise', 'red', 'purple', 'orange', 'yellow', 'gray'];

button.addEventListener('click', changeBackground);

function changeBackground(){
    var randomColor = parseInt(Math.random()*colors.length + 1);
    document.body.style.backgroundColor = colors[randomColor];
}