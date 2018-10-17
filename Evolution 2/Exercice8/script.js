function jourDeLaSemaine() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
            break;
        default:
            day = "Unknown Day";
    }
    document.getElementById("valider").innerHTML = "Today is " + day;
<<<<<<< HEAD
}



// JourDeLaSemaine = () => {
//     let d = new Date();
//     let weekday = d.getDay();
//     switch (weekday) {
//     case 0:
//     alert("on est dimanche, remets-toi d'hier");
//     break;
//     case 1:
//     alert("on est lundi, Bonne merde");
//     break;
//     case 2:
//     alert("on est mardi");
//     break;
//     case 3:
//     alert("on est mercredi");
//     break;
//     case 4:
//     alert("on est jeudi");
//     break;
//     case 5:
//     alert("on est vendredi, repos");
//     break;
//     case 6:
//     alert("on est samedi, alcool, drogue et sexe !!");
//     break;
//     default:
//     alert(d);
//     }
//     }
=======
}
>>>>>>> 0908632f17d41a50df7969075b020c8444f21d1c
