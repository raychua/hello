const assert = require('assert');

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in an array of numbers and outputs an array of the numbers that are even
function keepEvenNumbers(numbers) {

    const isEvenNumbers = number => {
        return number % 2 === 0;
    }
    //console.log(numbers.filter(isEvenNumbers));
    return numbers.filter(isEvenNumbers);

}
// Assertions (do not change)
assert.deepEqual(keepEvenNumbers([1, 2, 3, 4]), [2, 4]);
assert.deepEqual(keepEvenNumbers([10, 15, 20, 25, 30, 35]), [10, 20, 30]);
/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that takes in an array of strings and outputs an array of single-word strings (i.e. it has no spaces)
function keepSingleWords(words) {

    const isSingleWord = singleWord => {
        return !singleWord.includes(" ");
        /*         let hasSpace = false;
                for (let i = 0; i < singleWord.length; i++) {
                    if (singleWord[i] === ' ')
                        hasSpace = true;
                }
                return !hasSpace; */
    }
    console.log(words.filter(isSingleWord));
    return words.filter(isSingleWord);

}
// Assertions (do not change)
assert.deepEqual(keepSingleWords(["hello", "hello world"]), ["hello"]);
assert.deepEqual(keepSingleWords(["hello world", "ok", "bye"]), ["ok", "bye"]);
/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in (i) an array of people and (ii) an integer (ageLimit). 
// It should return an array of the names of the people which are above the age limit
// hint: you need to apply filter and map
function filterUnderagedPeople(people, ageLimit) {

    const getAboveAgeLimit = person => {
        return (person.age >= ageLimit);
    }

    let aboveAgeLimit = people.filter(getAboveAgeLimit);
    const onlyAboveAgeLimit = aboveAgeLimit.map(element => {
        return element.name;
    });
    console.log("onlyAboveAgeLimit:" + onlyAboveAgeLimit);
    return onlyAboveAgeLimit;

}
// Assertions (do not change)
const people = [
    { name: "bob", age: 18 },
    { name: "jane", age: 25 },
    { name: "tim", age: 40 }
];
assert(filterUnderagedPeople(people, 20), ["jane", "tim"]);
assert(filterUnderagedPeople(people, 26), ["tim"]);
/* ---------------------- EXERCISE 3 (BONUS) ---------------------- */
// define a function that takes in (i) an email domain (e.g. 'yahoo.com' or 'gmail.com') and (ii) any number of email strings
// It should return an array of emails that match the domain
// hint: you need to use the ...rest operator in the function's parameters
function filterEmailsByDomain(domain, ...emails) {

    const haveSameDomain = email => {
        return (email.includes(domain));
    }
    return emails.filter(haveSameDomain);

}
let actual = filterEmailsByDomain(
    "yahoo.com",
    "bob@gmail.com",
    "jane@yahoo.com",
    "alice@yahoo.com"
);
let expected = ["jane@yahoo.com", "alice@yahoo.com"];
assert.deepEqual(actual, expected);
actual = filterEmailsByDomain(
    "gmail.com",
    "bob@gmail.com",
    "jane@yahoo.com",
    "alice@yahoo.com"
);
expected = ["bob@gmail.com"];
assert.deepEqual(actual, expected);