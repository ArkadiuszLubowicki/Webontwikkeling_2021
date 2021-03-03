function multiplyText(amount: number, text: string = "default", appendix?: string): string{
    let tekst: string = "";
    for(let i = 0; i < amount; i++){
        tekst = tekst.concat(text + " ");
    }

    if(appendix != undefined){
        tekst = tekst.concat(appendix);
    }

    return tekst;
}

let result: string = multiplyText(3, "Arkadiusz Lubowicki", "?");

console.log(result);