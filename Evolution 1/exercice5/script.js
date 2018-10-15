function myFunction(){
    let a
    a = document.getElementById("premier_nombre").value;
    
    let b
    b = document.getElementById("deuxieme_nombre").value;
    
    alert(parseInt(a) * b)
    }

    console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

// let nbr = () => {
//     let premier_nombre = document.getElementById("premier_nombre").value;
//     let deuxieme_nombre =document.getElementById("deuxieme_nombre").value;
//     premier_nombre = parseInt(premier_nombre);
//     let totalNbr = premier_nombre*deuxieme_nombre;
//     alert("le résultat donnera " + totalNbr + " !");
//     }