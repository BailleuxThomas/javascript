// function verif = () => {
//     let motdepasse = document.getElementById("motdepasse").value;
//     let confirmation = document.getElementById("confirmation").value;

//     if(motdepasse == confirmation)
//     {
//     motdepass.style.border = 'solid 3px green';
//     confirmation.style.border = 'solid 5px red';
//     }
//     else
//     {
//         motdepass.style.border = 'solid 3px green';
//         confirmation.style.border = 'solid 5px red';
//     }
// }
// }



let motdepasse = document.getElementById("motdepasse");
let confirmation = document.getElementById("confirmation");

function verif () {
if (motdepasse.value === confirmation.value) {
motdepasse.style.border = 'solid 5px green';
confirmation.style.border = 'solid 5px green';
}else {
motdepasse.style.border = 'solid 5px red';
confirmation.style.border = 'solid 5px red';
}
}
