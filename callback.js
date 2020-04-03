const assert = require("assert");
const myMap = (array, callback) => {
    // fill in your code
    const newArray = [];

    for (const i in array)
        newArray.push(callback(array[i], i));
    return newArray;
};

const myFilter = (array, callback) => {
    // fill in your code
    const newArray = [];
    for (const i in array)
        if (callback(array[i], i))
            newArray.push(array[i]);
    return newArray;
};

assert.deepEqual(
    myMap([1, 2, 3, 4], (element, index) => element * 2), [2, 4, 6, 8]
);

assert.deepEqual(
    myFilter([1, 2, 3, 4], (element, index) => element < 3), [1, 2]
);