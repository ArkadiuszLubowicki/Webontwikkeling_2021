function multiplyText(amount, text){
    let tekst: string = "";
    for(let i = 0; i < amount; i++){
        tekst = tekst.concat(text + " ");
    }
    return tekst;
}

let result: string = multiplyText(3, "flower");

console.log(result);