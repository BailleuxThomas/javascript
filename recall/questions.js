var selectElementsStartingWithA = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) != "A") {
            array.splice(i, 1);
        }
    }
    return array;

    // let startsWithN = array.filter((array) => array.startsWith("a"));
    // return(startsWithN);
}

var selectElementsStartingWithVowel = function (array) {

    const voyelle = ["a", "e    ", "i", "o", "u", "y"]
    let result = [];
    for (let j = 0; j < voyelle.length; j++)
    //console.log(array[1])
    {

        for (let i = 0; i < array.length; i++) {
            if (array[i].charAt(0) == voyelle[j]) {
                result.push(array[i])

            }

        }
    }
    return result.reverse()
}

var removeNullElements = function (array) {
    for (let i = array.length; i > -1; i--) {
        if (array[i] == null) {
            array.splice(i, 1);
        }
    }
    return array;
}

var removeNullAndFalseElements = function (array) {
    for (let i = array.length; i > -1; i--) {
        if (array[i] == null) {
            array.splice(i, 1);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            array.splice(i, 1);
        }
    }
    return array;

}

var reverseWordsInArray = function (array) {
for (let i = 0; i < array.length; i ++) {
       array[i] = array[i].split('').reverse().join('');
    }
    return array;
}

var everyPossiblePair = function (array) {
    result=[]
    for (let i = 0; i < array.length -1; i++) {
    for(let j = i +1; j < array.length; j++) {
    result.push([array[j],array[i]].sort());
    }
    }
    console.log(result.sort());
    return result.sort();
    }
    
var allElementsExceptFirstThree = function (array) {
    return 'Write your method here';
}

var addElementToBeginning = function (array, element) {
    let result
    result = array.unshift(1);
    result = array;
    return result;
}

var sortByLastLetter = function (array) {
    result=[]
    for (let i = 0; i < array.length; i++) {
        result[i]
    }
}

var getFirstHalf = function (string) {
    return string.slice(0,3);
}

var makeNegative = function (number) {
    let result = 5
    return result * (-1);
}

var numberOfPalindromes = function (array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == (array[i]).split("").reverse().join("")){
        result = result +1;
    }
}
return result;
}

var shortestWord = function (array) {
//     array.splice(0, 3, "is");
//     console.log(array);
//     return array[0];
// }

    let min = 10000;
    let word = ''
    for (i=0;i < array.length; i++)
    {
        if (array[i].length < min)
        {
            min=array[i].length;
            word = array[i]
        }
    }
    return word;
}


var longestWord = function (array) {
    let min = 5;
    let blabla = ''
    for (i=0;i < array.length; i++)
    {
        if (array[i].length > min)
        {
            min=array[i].length;
            blabla = array[i]
        }
    }
    console.log(blabla);
    return blabla;
}

var sumNumbers = function (array) {
    const reducer = (a, b) => a + b;
    console.log(array.reduce(reducer));
    return array.reduce(reducer);
}

var repeatElements = function (array) {
let result = []
result = array
return array.concat(result);
}

var stringToNumber = function (string) {
    return Number(string);
}

var calculateAverage = function(array) {

    let n = array.length;   
    var somme = 0;
    for(i=0; i<n; i++)
            somme += array[i];
    return somme/n;   
}

var getElementsUntilGreaterThanFive = function (array) {
    return 'Write your method here';
}

var convertArrayToObject = function (array) {
    return 'Write your method here';
}

var getAllLetters = function (array) {
    return 'Write your method here';
}

var swapKeysAndValues = function (object) {
    return 'Write your method here';
}

var sumKeysAndValues = function (object) {
    let ret = {};
    for(let key in object){
    ret[object[key]] = key;
    }
    return ret;
}

var removeCapitals = function (string) {
    let yeah = []
    
}

var roundUp = function (number) {
    return 'Write your method here';
}

var formatDateNicely = function (date) {
    return 'Write your method here';
}

var getDomainName = function (string) {
    return 'Write your method here';
}

var titleize = function (string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function (string) {
    return 'Write your method here';
}

var squareRoot = function (number) {
    return 'Write your method here';
}

var factorial = function (number) {
    return 'Write your method here';
}

var findAnagrams = function (string) {
    return 'Write your method here';
}                       

var convertToCelsius = function (number) {
    return 'Write your method here';
}

var letterPosition = function (array) {
    return 'Write your method here';
}