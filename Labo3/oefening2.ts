let word: string = "sven is here";
let reverse: string = "";

function reverseString(woord: string){
    for(let c of woord){​​
        reverse = c + reverse;
    }​​
    return reverse;
}

console.log(reverseString(word));
reverseString(word);