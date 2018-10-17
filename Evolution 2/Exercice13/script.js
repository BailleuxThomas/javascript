function calculIMC() {
    let poids = prompt("Donne ton poids", "Fait pas ta timide!");
    let taille = prompt("Donne ta taille", "DEPECHE TOI!");
    let imc2d = Number(poids/(taille*taille));
    let imc = imc2d.toFixed(2);
    console.log(imc);
    if (imc < 16.5) {
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : dénutrition ou famine");
    }
    else if (imc < 18.5) {
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : maigreur");
    }
    else if (imc < 25) {
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : corpulance normale");
    }
    else if (imc < 30) {
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : surpoids");
    }
    else if (imc < 35){
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : obésité modérée");
    }
    else if (imc < 40) {
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : obésité sévère");
    }
    else if (imc > 40) {
    alert("Votre IMC est "+ imc +"\nEt celle-çi vous place dans la catégorie : obésité morbide");
    }
    else {
    alert("Tu n'as pas respecté les consignes !");
    }
    }



// Mon code qui ne fonctionne pas je ne sais pas pourquoi :'('

    // if (imc < 16,5){
    //     alert("Dénutrition ou famine");
    // }
    // else if (imc > 16,5 && imc < 18,5){
    //     alert("Maigre");
    // }
    // else if (imc >= 18,5 && imc < 25){
    //     alert("corpulance normale");
    // }
    // else if (imc >= 25 && imc < 30){
    //     alert("surpoids");
    // }
    // else if (imc >= 30 && imc < 35){
    //     alert("obésité modérée");
    // }
    // else if (imc >= 35 && imc < 40){
    //     alert("obésité sévère");
    // }
    // else 
    //     alert("obésité morbide")