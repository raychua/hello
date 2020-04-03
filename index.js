const assert = require('assert');
/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in array of strings with every element converted to uppercase
function convertToUpperCase(array) {
    const result = array.map(element => {
        return element.toUpperCase();
    })
    console.log("result:" + result);
    return result;
}
function convertToUpperCaseTrad(array) {


    const result = array.map(function upInd(ind) {
        return ind.toUpperCase();
    });
    console.log("resultTrad:" + result);
    return result;

}


// Assertions (do not change)
assert.deepEqual(convertToUpperCase(["hello"]), ["HELLO"]);
assert.deepEqual(convertToUpperCase(["hello", "gOOdBYE"]), ["HELLO", "GOODBYE"]);
assert.deepEqual(convertToUpperCaseTrad(["hello"]), ["HELLO"]);

/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that multiplies all elements in an array by 10
function multiplyBy10(array) {
    const result = array.map(element => {
        return element * 10;
    })
    console.log("result:" + result);
    return result;

}
// Assertions (do not change)
assert.deepEqual(multiplyBy10([1, 2]), [10, 20]);
assert.deepEqual(multiplyBy10([3, 5, 7]), [30, 50, 70]);
assert.deepEqual(multiplyBy10([-1, 0, 1]), [-10, 0, 10]);
/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in an array objects and returns only an array of strings of the name field
function onlyNames(array) {
    const onlyNames = array.map(element => {
        return element.name;
    });
    console.log("onlyNames:" + onlyNames);
    return onlyNames
}
// Assertions (do not change)
var input = [
    {
        name: "homer",
        favorite: "donuts"
    },
    {
        name: "marge",
        favorite: "family"
    },
    {
        name: "lisa",
        favorite: "school"
    }
];
assert.deepEqual(onlyNames(input), ["homer", "marge", "lisa"]);
/* ---------------------- EXERCISE 3 ---------------------- */
// define a function that removes any non-vowel character from words in an array
function keepOnlyVowels(array) {

    function onlyVowel(vowel) {
        newStr = "";

        for (i = 0; i < vowel.length; i++) {
            if ("aeiouAEIOU".includes(vowel[i]))
                newStr = newStr + vowel[i];
        }
        /*
        vowel.forEach(v => {
            if ("aeiouAEIOU".includes(v))
                newStr += v;
        });
        */
        return newStr;
    }




    const newlist = array.map(singlePhrase => {
        console.log(onlyVowel(singlePhrase));
        return onlyVowel(singlePhrase);
    });
    return newlist;
}




// Assertions (do not change)
assert.deepEqual(keepOnlyVowels(["abc"]), ["a"]);
assert.deepEqual(keepOnlyVowels(["exceptional"]), ["eeioa"]);
assert.deepEqual(keepOnlyVowels(["average", "exceptional", "amazing"]), [
    "aeae",
    "eeioa",
    "aai"
]);