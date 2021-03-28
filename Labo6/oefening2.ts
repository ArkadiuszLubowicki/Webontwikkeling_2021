let names: string[] = ['joske','franske','donald','achmed'];

let capitalNames1: string[] = [];
names.forEach(element=>capitalNames1.push(element.toUpperCase()));
console.log(capitalNames1);

let capitalNames2: string[] = names.map(element=>element.toUpperCase());
console.log(capitalNames2);