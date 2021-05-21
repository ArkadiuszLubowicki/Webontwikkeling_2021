const fetch = require('node-fetch');

let c1 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
    .then((r:any)=>r.json());
let c2 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001')
    .then((r:any)=>r.json());;
let c3 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002')
    .then((r:any)=>r.json());;

Promise.all([c1, c2, c3]).then(r=>{
    //console.log(r[0].drinks[0].strDrink);
    //console.log(r[1].drinks[1].strDrink);
    //console.log(r[2].drinks[1].strDrink);
    r.forEach(a=>console.log(a.drinks[0].strDrink))
})

export {};