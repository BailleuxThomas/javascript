var CreationTableauLangages = function () {
return tab=['Html','CSS','Java','PHP'];
}

var CreationTableauNombres = function () {
return [0,1,2,3,4,5];
}

var RemplacementElement = function (langages) {
langages.splice(2,1, "Javascript");
return langages;
}

var AjoutElementLangages = function (langages) {
langages.splice(5,2, "Ruby","Python")
// langages.push("Ruby","Python")
return langages;

}

var AjoutElementNombres = function (nombres) {
nombres.unshift(-2,-1);
return nombres;
}

var SuppressionPremierElement = function (langages) {
langages.shift()
return langages;
}

var SuppressionDernierElement = function (langages) {
langages.pop()
return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
reseaux_sociaux = ['Facebook','Twitter','Google +','Viadeo','LinkedIn']
return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
langages_chaine = langages.toString()
return langages_chaine;
}

var TriTableau = function (reseaux_sociaux) {
reseaux_sociaux.sort()
return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
reseaux_sociaux.reverse()
return reseaux_sociaux;
}
