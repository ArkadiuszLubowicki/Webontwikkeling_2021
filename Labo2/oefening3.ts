let veelvouden_7: Array<number> = [];

for(let i = 0; i <= 70; i++)
{
    if(i % 7 == 0)
    {
        veelvouden_7.push(i);
    }
}
console.log(veelvouden_7);

for(let i = 0; i <= 11; i++)
{
    (veelvouden_7[i] % 5 == 0 || veelvouden_7[i] % 3 == 0) ? console.log(veelvouden_7[i]) : null;
}