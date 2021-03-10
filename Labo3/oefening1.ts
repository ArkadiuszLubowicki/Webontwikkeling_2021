let items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

function search(eenArray: number[], teZoeken: number){
    return eenArray.indexOf(teZoeken);
}

console.log(search(items, 5)); // 1 
console.log(search(items, 15)); // 6