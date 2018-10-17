function conversionTemperature() {
    let faireChoix = prompt("1 Pour De Celsius vers Fahrenheit\n2 Pour De Celsius vers Kelvin\n3 Pour De Fahrenheit vers Celsius\n4 Pour De Fahrenheit vers Kelvin\n5 Pour De Kelvin vers Celsius\n6 Pour De Kelvin vers Fahrenheit", "1, 2, 3 TEST TU VERRA BIEN!")
    let convertis
    let resultat
    switch (faireChoix)
    {
        case "1":
            convertis = prompt("Choisi un nombre");
            resultat = (convertis * 9/5) + 32;
            // [°F] = ([°C] x 9/5) + 32
            alert(resultat)
            break;

        case "2":
            convertis = prompt("Choisi un nombre")
            resultat = convertis + 273.15
            // [K] = [°C] + 273,15
            alert(resultat)
            break;
        case "3":
            convertis = prompt("Choisi un nombre")
            resultat = (convertis - 32) * (5/9)
            // [°C] = ([°F] - 32) / (9/5)
            alert(resultat)
        break;
        case "4":
            convertis = prompt("Choisi un nombre")
            resultat = (convertis - 32 * 5/9) + 273.15
            // [K] = (([°F] - 32) x (5/9)) + 273,15
            alert(resultat)
            break;
        case "5":
            convertis = prompt("Choisi un nombre")
            resultat = convertis - 273,15
            // [°C] = [K] - 273,15
            alert(resultat)
            break;
        case "6":
            convertis = prompt("Choisi un nombre")
            resultat = (convertis * 9/5) - 459.67
            // [°F] = ([K] x 9/5) - 459,67
            alert(resultat)
            break;    
        default:
            alert("C'est quand même pas compliqué d'écrire un putain de numéro! DE 1 A 6 !");
            break;
    }
    }





