let strArr = ["Ali", "Ramzan","Ahmed","Subhan", "Umair"];
let numArr = [1,2,3,4,5,6,7,8,9];

// for(let  i = 0; i < strArr.length ; i= i + 3){
//     console.log(strArr[i]);
// }

// let i = 0;
// for(;i < strArr.length ; ){
//     console.log(strArr[i]);
//     i++;
// }

// let i = strArr.length - 1;
// while(i >= 0){
//     console.log(strArr[i]);
//     i--;
// }

// i = 0;

// do {
//     console.log("Hello");
//     i++;
// } while(i < 0);

// const person = {"fname":"John", "lname":"Doe", "age":25};

// let text = "";
// for (let [key,value] of person) {
//   console.log(key);
// }

// console.log(text);
function myFun(val,i){
    console.log(i);
    console.log(val);
    
}
numArr.forEach((val,i) => console.log(val));