// function myFunction(){
//     let a
//     a = document.getElementById("premier_nombre").value;
    
//     let b
//     b = document.getElementById("deuxieme_nombre").value;
    
//     alert(parseInt(a) * b)
//     }

// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

// function nbr(){
//     let a
//     a = document.getElementById("pointure").value;

// let b 
// b = document.getElementById("annee").value;

// let resultat 
// resultat = (( a * 2 ) + 5 )  * 50 - b + 1766



// alert( resultat )
// }

let nbr = () => {
    let pointure = document.getElementById("pointure").value;
    let annee = document.getElementById("annee").value;
    let result1 = pointure *2;
    let result2 = result1 + 5;
    let result3 = result2 *50;
    let result4 = result3-annee;
    let resultNbr = result4 + 1766;
    alert("le résultat donnera " + resultNbr);
    }