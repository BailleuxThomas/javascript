var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.fillStyle = "orange";
ctx.fillRect(400,300,350,100);

ctx.beginPath();
ctx.moveTo(1000, 300);
ctx.lineTo(750, 300);
ctx.lineTo(750, 400);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(340, 300);
ctx.lineTo(400, 300);
ctx.lineTo(400, 400);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.fillRect(600,25,25,275);

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(610,50);
ctx.bezierCurveTo(950, 50, 600, 300, 610, 300);
ctx.lineTo(900,250);
ctx.fill();
ctx.closePath();
