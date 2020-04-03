const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

function countWords(inputWords) {
    return inputWords.reduce((words, word) => {
        if (words[word] == undefined) {
            words[word] = 1;
        }
        else
            words[word] += 1;
        return words;
    }, {});
}

console.log(countWords(inputWords));