let score = 0;
let multiplicateur = 1;
let score2;
let bonus = document.querySelector('#bonus');
let temps = 30

let jouer = () => {
    score = score + (1 * multiplicateur);
    document.getElementById('affichage').innerText = score;
}

let x1 = () => {
    if (score > multiplicateur * 50) {
        score = (score - (multiplicateur)) - (multiplicateur * 50)
        multiplicateur += 1
        document.getElementById('clic').innerText = multiplicateur;
        document.getElementById('affichage').innerText = score;
        console.log(score);
    }
    else {
        alert("N'exagère pas! T'a pas assez de point!")
    }
}

let autoclick = () => {
    if (score >= 500) {
        score -= 500 || true
        setInterval(function () { jouer() }, 1000);
        document.getElementById('affichage').innerText = score;
        autoclick = document.getElementById('autoclick').disabled = true;
        console.log(score);
    }
    else {
        alert("Il te faut 500 points")
    }
}

let bonusTime = () => {

    if (score > 50) {
        intervalle = setInterval(timedText, 1000);
        score = score - 50
        bonus.disabled = true;
        bonusScore(); // Exécute la fonction bonusScore
        time(); // Exécute la fonction bonusScoreEnd après X secondes
        timedText();
    } else {
    }
}
    
    let bonusScore = () => {
    multiplicateur = multiplicateur * 2;
    console.log(multiplicateur);
    }
    
    let bonusScoreEnd = () => {
    multiplicateur = multiplicateur / 2;
    bonus.disabled = false
    console.log(multiplicateur);
    }

    let time = () => {
        setTimeout(bonusScoreEnd, 30000)
    }
    let timedText = () => {
    temps = temps - 1
    if (temps == 0) {
    temps += 30
    clearInterval(intervalle);
    
    }
    document.getElementById("bonus").innerText = ("Bonus " + (temps))
    }

bonusScore = () => {
    multiplicateur = multiplicateur * 2;
    console.log(multiplicateur);
}
