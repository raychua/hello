const pokemonData = require("./pokemonData");

// Example: using map, return all pokemons with their japanse name.
// Output: ['フシギダネ', 'フシギソウ', 'フシギバナ', 'ヒトカゲ',   'リザード', ...]
const pokemonsInJap = pokemonData.map(pokemon => pokemon.name.japanese);
//console.log(pokemonsInJap);

// Q1. using map, return all pokemons with only the id and english name.
// Output:
// [{
//   id: 1,
//   name: Bulbasaur
// }, ...]

const pokemonInIDEng = pokemonData.map(pokemon => {
    return pokeid = {
        id: pokemon.id,
        name: pokemon.name.english,
    }
});

console.log(pokemonInIDEng);

// Q2. using filter, return all pokemons with attach higher than 120(does not include 120).
const higherAttack = pokemonData.filter(pokemon => {
    if (pokemon.base.Attack > 120)
        return pokemon;

});

console.log(higherAttack);


// Q3. using filter, return all pokemons with english name longer than 8 characters.
const longerEightname = pokemonData.filter(pokemon => {
    if (pokemon.name.english.length > 8)
        return pokemon;
});


console.log(longerEightname);


// Q4. using filter, return all pokemons that are flying type.
function whatType(kind) {
    const onlyType = pokemonData.filter(pokemon => {
        if (pokemon.type.includes(kind)) {
            return pokemon;
        }
    })
    return onlyType;
};

console.log(whatType("Flying"));

// Q5. using filter, return all pokemons that only have one type and is flying type.
function onlyType(kind) {
    const onlyType = pokemonData.filter(pokemon => {
        if (pokemon.type.includes(kind)) {
            if (pokemon.type.length === 1)
                return pokemon;
        }
    })
    return onlyType;
};

console.log(onlyType("Normal"));
// Q6. using reduce, return the sum of spAttack all psychic pokemons

function pyschicTotalspAttack() {
    const pyschicType = whatType("Psychic");
    //console.log("pyschicType.length:" + pyschicType.length);
    const pyschicTotalspAttack = pyschicType.reduce((sum, pokemon) => {
        //console.log(pokemon.base.SpAttack);
        return sum += pokemon.base.SpAttack;

    }, 0);
    return pyschicTotalspAttack;
}
console.log(pyschicTotalspAttack());

// Q7. using reduce, return an object with an array of all psychic pokemon names and their totalSpAttack 
// {
//   psychicPokemonsNames: ["abra", "slowbrow", ...],
//   totalSpAttack: 1234
// }



const result = {
    pyschicPokemonsNames: whatType("Psychic").map(pokemon => pokemon.name.english),
    totalSpAttack: pyschicTotalspAttack()
}

console.log(result);


// Q8. using both filter and map,  return all pokemon english name and SpAttack if their SpAttack is > 120



const higherSPAttack = pokemonData.filter(pokemon => {
    if (pokemon.base.SpAttack > 120)
        return pokemon;

});

console.log(higherSPAttack.map(pokemon => {

    return {
        name: pokemon.name.english,
        SpAttack: pokemon.base.SpAttack
    }

})
);