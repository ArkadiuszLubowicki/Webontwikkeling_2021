enum Kleur {
    Rood,
    Oranje,
    Geel,
    Groen,
    Blauw,
    Indigo,
    Violet
}

let regenboog: Array<string> = [];

for(let i = 0; i < 7; i++)
{
    regenboog.push(Kleur[i]);
    console.log(Kleur[i]);
}

console.log('Omgekeerde volgorde.');

let kleur: string;

while(regenboog.length != 0)
{
    kleur = regenboog.pop();
    console.log(kleur);
}