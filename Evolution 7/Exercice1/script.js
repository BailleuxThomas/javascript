var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 1000);
ctx.lineTo(100, 40);
ctx.fillStyle = "black"
ctx.fillRect(100,40,80,150);
ctx.stroke();
ctx.fillStyle = "red"
ctx.fillRect(180,40,80,150);
ctx.fillStyle = "yellow"
ctx.fillRect(260,40,80,150);
ctx.closePath();
ctx.stroke();
