const b = 2;
const a = 5;

consolelog(a=b++);
consolelog(a=++b);
consolelog(a=b--);
consolelog(a=--b);
consolelog(a+=b++);
consolelog(a=1; a+=++b);
consolelog(a=1; a-=b++);
consolelog(a=1; a-=++b);
consolelog(a=1; a+=b--);
consolelog(a=1; a+=--b);

function affiche () {
    alert("Le résultat est " a);
    alert("Le résultat est " b)
}