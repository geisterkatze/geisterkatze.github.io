var canvas = document.getElementById('lines');
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = canvas.width * 0.5 +"px";
canvas.style.height = canvas.height * 0.5 +"px";
ctx = canvas.getContext('2d');
ctx.scale(2,2);

var white = "rgba(255, 254, 247, 0.4)";

function drawLines(ctx, canvas, numberOfLines, color) {
    var factor = 10;
    var lineWidth = 1;
    var spacing = 2;

    for(var i = 0; i < numberOfLines; i++) {
        factor = Math.random() * (canvas.height / numberOfLines);
        lineWidth = Math.random() * 2;
        spacing = Math.random() * 6;


        ctx.beginPath();
        ctx.moveTo(0, i * factor);
        ctx.lineWidth = lineWidth
        ctx.lineTo(canvas.width * 0.25, i * factor);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.25, i * factor + spacing);
        ctx.lineTo(canvas.width, i * factor + spacing);
        ctx.stroke();
        ctx.closePath();
    }
}

drawLines(ctx, canvas, 200, white);
