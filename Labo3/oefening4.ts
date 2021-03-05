enum Color{
    Red,
    Green,
    Blue,
}


function multiplyTextColor(amount: number, text: string = "default", color: Color , appendix?: string){
    let tekst: string = "";
    for(let i = 0; i < amount; i++){
        tekst = tekst.concat(text + " ");
    }

    if(appendix != undefined){
        tekst = tekst.concat(appendix);
    }

    console.log(tekst);
    //console.log(kleur(tekst));
    return tekst;
}

multiplyTextColor(3, "Arkadiusz Lubowicki", Color.Red, "?")

//let result_4: string = multiplyTextColor(3, "Arkadiusz Lubowicki", Color.Red, "?");

//console.log(result_4);