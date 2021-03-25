interface CalculateSpecificAnimalAge {
    (age: number):number
}

const calculateAnimalAge = (age: number, ratio: number): number => age * ratio;

//const calculateDogAge:CalculateSpecificAnimalAge = age => calculateAnimalAge(age, 7);

const calculateAnimalAgeFunctional = (ratio: number):CalculateSpecificAnimalAge => {
    return (age: number):number => calculateAnimalAge(age, ratio);
}

const calculateDogAge = calculateAnimalAgeFunctional(7);
console.log(calculateDogAge(3));

console.log(calculateAnimalAge(3,7));


const calculateHamsterAge = calculateAnimalAgeFunctional(26);
console.log(calculateHamsterAge(.5));


