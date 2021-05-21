const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

const slowDiv = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        if(b ===0){
            reject("You cannot divide by zero");
        }
        setTimeout(() => {
            resolve(a/b);
        },2000)
    });
}

slowSum(1,5).then(r=>console.log(r));
slowSum(1,5).then(r=>slowMult(r,2)).then(r=>console.log(r));
