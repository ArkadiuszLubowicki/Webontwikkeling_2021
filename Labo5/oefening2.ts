interface ResultHandler {
    (number: number): void
}
const printToConsole = (number : number) : void => console.log(`the result is ${number}`);

const sum = (numbers: number[], resultHandler:ResultHandler, resultHandler2:ResultHandler): void => {
    let total: number = 0;
    for(let n of numbers){
        total+=n;
    }
    if(total >= 10){
        resultHandler(total);
    }
    else{
        resultHandler2(total);
    }
}

sum([3,4,1], printToConsole, number => console.log(`the result ${number} is a very small number`));

export {};