// Arrays in JS

const marvels = ["Thor", "Iron man", "Captain America", "Hulk", "Black Panther", "Spider man"];
console.log(marvels);
console.log(marvels.length);   // 6
console.log(marvels[0]);
console.log(marvels[5]);
console.log(marvels[3]);
marvels[2] = "Spider man";
console.log(marvels);


for(i in marvels){
    console.log(marvels[i])   // to print all the array values one after the another
}
