let strArr = ["Ali", "Ramzan","Ahmed","Subhan", "Umair"];
let numArr = [1,2,3,4,5,6,7,8,9];

// to access single element use index
console.log(strArr[2]);

// to access all at once use loop
for(let i = 0; i < strArr.length; i++){
    console.log(strArr[i]);
}

// for in loop
for(let i in numArr) {
    console.log(i);
}

// to change specific index value
console.log(strArr[0] = "Changed");
console.log(strArr);


// ********* Array Methods ********** //

// to get length of array
console.log(strArr.length);

// to convert array to string
console.log(strArr.toString()); // string each element seperated by ,
console.log(strArr.toString());

// to add new element in array 
console.log(strArr.push("Ali")); // add at end and return new length
console.log(strArr.unshift("Ali2")); // add at start and return new length


// to remove single element from array
console.log(strArr);
console.log(strArr.pop()); // remove value from last index  and return removed value
console.log(strArr.shift()); // remove form start and return that element

// to access element at specific index
console.log(strArr.at(0));

// to join two array elemnts just like toString method
// in this we can specify specific seperator
console.log(strArr.join('*'));

// to delete specific values using index
console.log(delete strArr[0]);
console.log(strArr);  // delete will remove element and leave that space undefined

// to join two arrays
console.log(strArr.concat(numArr));

// to copy some part of array within array
console.log(strArr.copyWithin(2,0));  // will copy from 0 to onwards index at 2 index
console.log(numArr);
console.log(numArr.copyWithin(3,0,2)); // will copy from 0 to 1 index less than 2 and copy at 

// to reduce the dimesions of array
let dimensionedArray = [[1,2],[4,5,6],7];
console.log(dimensionedArray.flat());


// to remove some part of array and add new at that point
console.log(numArr.splice(0,0,7,8)); //changes the original array
//  first parameter 0 defines the position where new elements should be added 
//  second parameter 0 defines how many elements should be removed
//  rest of the parameters 7,8 define the new elements to be added
// returns array with deleted elements

console.log(numArr);
// splice can be used to remove elements only if we omit last params
console.log(numArr.splice(0,2));

// if you want to not to change original array use tospliced
console.log(numArr.toSpliced(0,5)); // will remove 5 elements from start and return new array without them
// original array will remains same


// to extract elemnts from array just like strings without changing original array
console.log(numArr.slice(1,6));  // slice from 1 index to 6 index


// numArr.find()