const replaceEvenCharactersWithLetter = letter => {
    return string => { // write the rest of your code here
        /*         let newString = "";
                for (i in string) {
                    if (i % 2 === 0)
                        newString += letter;
                    else newString += string[i];
                }
                console.log("newString:" + newString);
                return newString; */


        return string.split("").map((element, i) => {
            if (i % 2 === 0)
                return letter
            else return element;
        }).join("");


    };
};



/* function replaceEvenCharactersWithLetter(letter) {
    return function replaceString(string) {
        let newString = "";
        for (i in string) {
            if (i % 2 === 0)
                newString += letter;
            else newString += string[i];
        }
        console.log("newString:" + newString);
        return newString;

    }
} */

const replaceEvenCharactersWithW = replaceEvenCharactersWithLetter("w");

console.log(replaceEvenCharactersWithW("hello world~"));
// prints wewlw wowlw~