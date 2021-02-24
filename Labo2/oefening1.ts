let getallen: number[] = [];
let getal: number = 100;


for(let i = 0; i <= 100; i++)
{
    getallen[i] = getal;
    getal++;
}

let teller: number = 0;

while(teller<=100)
{
    console.log(getallen[teller]);
    teller++;
}

console.log('Nu enkel getallen die deelbaar zijn door 3.')

for(let i = 0; i <= 100; i++)
{
    if(getallen[i] % 3 == 0)
    {
        console.log(getallen[i]);
    }
}