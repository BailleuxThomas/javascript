var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
// ctx.moveTo(110,75);
// ctx.arc(75, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
// ctx.moveTo(65, 65);
// ctx.fill();
// ctx.stroke();
// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
// ctx.moveTo(95, 65);
// ctx.fill();
// ctx.stroke();
// ctx.beginPath();
// ctx.fillStyle = "green";
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droite
// ctx.fill();
// ctx.stroke();



ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(355, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
ctx.moveTo(390,75);
ctx.arc(355, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
ctx.moveTo(325, 65);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(340, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
ctx.moveTo(375, 65);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(370, 65, 5, 0, Math.PI * 2, true);  // Oeil droite
ctx.fill();
ctx.stroke();


ctx.fillStyle = "orange";
ctx.beginPath();
ctx.fillRect(330,125,50,125)
ctx.strokeRect(330,125,50,125);
ctx.stroke();
ctx.closePath();
ctx.fill();
