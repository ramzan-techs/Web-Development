const arr = [
    ["apple", "banana"],
    ["orange", ["grape", "kiwi"]],
    "mango",
    ["pineapple", ["pear", "peach"]]
  ];
 
 let newArr = arr.flat();
  newArr = newArr.flat();
//   console.log(arr.flat());
//   console.log(newArr);
// change it to string and add "00" as separator for names
//   console.log(newArr.join("00"));
let newArr2 = newArr.join("00");
console.log(newArr2);
console.log(typeof(newArr2)); ;

//  console.log(arr.toString());