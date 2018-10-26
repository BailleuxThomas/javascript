Character = {"name":"Thomsson", "life":100, "age":26, "items_to_give":["épée","hache","arc","bouclier"]};
for (x in Character) {
console.log(Character [x]);
}

getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

let rand = getRandomArbitrary(0, 3);

selectobj = () => {
let objet = Character.items_to_give[rand];
console.log(objet);

}

selectobj();

 let shop = {"items_to_shop": [
        { "name":"Epée de feu", "physic":10, "magic": 10, "minLevel": 10, "boutique": true },
        { "name":"Hache du titan", "physic":10, "magic": 10, "minLevel": 10, "boutique": true },
        { "name":"arc en bois", "physic":10, "magic": 10, "minLevel": 10, "boutique": false },
        { "name":"bouclier en pique de feu", "physic":10, "magic": 10, "minLevel": 10, "boutique": true },
        { "name":"casque anti bactérien", "physic":10, "magic": 10, "minLevel": 10, "boutique": true },
        { "name":"baton du reptille", "physic":10, "magic": 80, "minLevel": 10, "boutique": true },
        { "name":"bague en forme de doigts avec de la peau du tirex", "physic":10, "magic": 10, "minLevel": 10, "boutique": true },
        { "name":"sortillège de feu", "physic":10, "magic": 80, "minLevel": 10, "boutique": true },
        { "name":"sceptre en forme de BaBtOu", "physic":8, "magic": 10, "minLevel": 10, "boutique": true },
        { "name":"Body de feu", "physic":10, "magic": 10, "minLevel": 10, "boutique": false },
        { "name":"Body BaBtOu titan", "physic":10, "magic": 7, "minLevel": 10, "boutique": false },
    ]};
for (x in shop) {
    console.log(shop [x]);
    }

let shopping = () => {
    let dispo;
    for (let i in shop.items_to_shop) {
            // console.log(shop.items_to_shop[i].boutique);
        dispo = shop.items_to_shop[i].boutique;
    if (dispo==true) {
        console.log(shop.items_to_shop[i]);
    }
    }
}

shopping();


let level = () => {
    let puissance;
    for (let i in shop.items_to_shop) {
            // console.log(shop.items_to_shop[i].boutique);
        puissance = shop.items_to_shop[i].minLevel;
    if (puissance==10) {
        console.log(shop.items_to_shop[i]);
    }
    }
}

level();




mainCharacter = {"name":"MaximeH", "level":10, "life":100}, weapon = {"name":"Duffbite","damage":7};

degats = () => {
    return (mainCharacter.level) * (weapon.damage);
}

console.log(degats());

vie = () => {
    return (mainCharacter.life) - (degats());
}

console.log(vie());

attackplayer1 = () => {
return mainCharacter.name + (" attaque " + Character.name + " avec comme arme " ) + weapon.name + (" et inflige ") + (degats()) + (" de dégats il te reste ") + (vie()) + (" points de vie"); 
}

// attaqueplayer2 =() => {
//     return Character.name + "Vous restes " + Character.life + " points de vie";
// }

attackplayer1();
console.log(attackplayer1());

// attackplayer2();
// console.log(attackplayer2());