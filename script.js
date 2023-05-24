

/*
const myArray = [1, 2, 3];
console.log(myArray);


const myArray2 = new Array(1, 2, 3);
console.log(myArray2);

*/

/*

const myArray = [1, true, "Dima"];
console.log(myArray);

const myArray2 = [1, true, "Dima"];
console.log(myArray);;

*/

/*

const myObj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
console.log(myObj);

const myArray = [1, 2, 3];
console.log(myArray);

*/

/*

const myArray = [1, true, "Dima"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.length);

*/

/*

const myArray = [1, 2, 3, 4];
console.log(myArray);
console.log(myArray.length);

myArray[2] = "Dima";
console.log(myArray);

myArray[4] = true;
console.log(myArray);
console.log(myArray.length);

*/

/*

const myArray = [1, true, "Dima"];
console.log(myArray);

myArray.push(4);
console.log(myArray);

myArray.push(true);
console.log(myArray);

*/

/*

const myArray = [1, true, "Dima"];
console.log(myArray);

myArray.pop();
console.log(myArray);

*/

/*

const myArray = [1, 2, 3];
console.log(myArray);

const removedElement = myArray.pop();
console.log(myArray);
console.log(removedElement);

*/

/*

const myArray = [1, 2, 3];
console.log(myArray);

myArray.unshift(true);
console.log(myArray);

myArray.unshift(false);
console.log(myArray);

console.table(myArray);

*/

/*

const myArray = [1, 2, 3];
console.log(myArray);

myArray.shift();
console.log(myArray);

const removedElement = myArray.shift();
console.log(removedElement); // Return deleted element
console.log(myArray)

*/

/*

const myArray = [1, 2, 3];
console.log(myArray);

myArray.forEach((el, ind)=>{
   // console.log(el * 2);
    console.log(`Element ${ind} has value ${el}`);
});

*/

/*

const myArray = [1, 2, 3];
console.log(myArray);

const newArray = myArray.map(el => el * 3);

console.log(myArray);
console.log(newArray);

*/

/*

const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray);

const newArray = myArray.map((el)=>{
   return el * 3;
});

console.log(myArray);
console.log(newArray);

*/

const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray);

const newArray = myArray.map(function(el){
   return el * 3;
});

console.log(myArray);
console.log(newArray);