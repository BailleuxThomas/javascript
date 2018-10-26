let finish = ["B", "O", "N", "J", "O", "U", "R"];
let search = ["", "", "", "", "", "", ""];

let guessLetter = () => {
    let essai = prompt("Entrez une lettre svp");
    let goodEssai = essai.toUpperCase();
    if (finish.includes(goodEssai) == false) {
        console.log("erreur");
    }
    for (let i = 0; i <= finish.length; i++) {
        
        
        if (finish[i] == goodEssai) {
            search[i] = goodEssai;
            console.log("Bravo", search);
        } 

    }
    
        if (search.indexOf("") >= 0) {
            guessLetter();
        }
        else {
            alert("Gagné!");
        }
    
};

guessLetter();