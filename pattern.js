const canvas = document.getElementById('pattern');
canvas.width = 2000;
canvas.height = 1000;
const ctx = canvas.getContext('2d');
ctx.font = '40px Montserrat, sans-serif';

const numberOfPoints = 40;

const randomX= () => Math.floor(Math.random() * canvas.width);
const randomY = () => Math.floor(Math.random() * canvas.height);

let points = [];


function init() {
    for(let i = 0; i < numberOfPoints; i++) {
        const x = randomX();
        const y = randomY();
        let c = 'x';

        if (i % 2 === 0) {
            c = 'o'
        }

        ctx.fillText(c, x, y);
        points.push([c, x, y]);
    }
}

init();

// const fps = 60;

// function draw() {
//     setTimeout(function() {
//     requestAnimationFrame(draw);
//     ctx.save();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     let time = performance.now();
//     let newPoints = [];

//     points.forEach(function(point) {
//         point[1] += Math.PI * 2 / 60;
//         newPoints.push(point);
//     });

//     newPoints.forEach(function(p) {
//         ctx.fillText(p[0], p[1], p[2]);
//     })

//     points = newPoints;

//    }, 1000 / fps);
// }

// window.requestAnimationFrame(draw);
