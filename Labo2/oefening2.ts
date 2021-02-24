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