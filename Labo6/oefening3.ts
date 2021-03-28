interface Pokemon {
    name: string
    xp: number
    type: string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 : Pokemon[]  = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];

// Spread
let starters: Pokemon[] = [...starterPokemonGen1, ...starterPokemonGen2];
//console.log(starters);

// Map
let names: string[] = starters.map(e=>e.name);
//console.log(names);

// Filter
let weakPokemon: Pokemon[] = starters.filter(e=>e.xp<=40);
//console.log(weakPokemon);

// Combineren (Map + Filter)
let weakPokemonNames: string[] = starters.filter(e=>e.xp<=40).map(e=>e.name);
//console.log(weakPokemonNames);

// Reduce
let sumOfAllXp = starters.reduce((sum, element) => sum + element.xp, 0);
//console.log(sumOfAllXp);

// Ik weet niet hoe StrongestPokemon moet

// Combineren (Reduce + Filter)
let sumOfAllXpOfWeakPokemon = starters.filter(e=>e.xp<=40).reduce((sum, element) => sum + element.xp, 0);
console.log(sumOfAllXpOfWeakPokemon)

export {};