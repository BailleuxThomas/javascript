var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.beginPath();
ctx.moveTo(1350, 780);
ctx.lineTo(50, 780);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();


ctx.fillStyle = "green";
ctx.beginPath();
ctx.fillRect(50,455,1300,475);
ctx.fill();
ctx.closePath();


// Porte garage

ctx.strokeStyle = "black";
ctx.fillStyle = "#996666";
ctx.fillRect(600,630,700,175)
ctx.strokeRect(600,630,700,175);
ctx.stroke();


// Porte finie

ctx.strokeStyle = "black";
ctx.fillStyle = "#FA7500";
ctx.fillRect(250,680,100,125)
ctx.strokeRect(250,680,100,125);
ctx.stroke();


// fenetre en haut à gauche
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "#C3FE01";
ctx.fillRect(150,480,100,125)
ctx.strokeRect(150,480,100,125);
ctx.stroke();
ctx.closePath();

// fenetre en haut à droite

ctx.strokeStyle = "black";
ctx.fillStyle = "#01FEA1";
ctx.fillRect(600,480,100,125)
ctx.strokeRect(600,480,100,125);
ctx.stroke();
ctx.closePath();

// Toit maison

ctx.fillStyle = "red";
ctx.beginPath();
// ctx.moveTo(50,455);
// ctx.lineTo(700,80);
ctx.triangle(30, 75, 58, 20, 86, 75);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.moveTo(1350,455);
ctx.lineTo(700,80);
ctx.stroke();
ctx.closePath();



