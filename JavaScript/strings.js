// console.log("Hello!");
let text  = "This is String";
let text2 = 'This is also string';
let text3 = 'This string contains \' inside it using escape characters';

// to use both single and double quotes inside a string without
// using escape character use "Template" strings start  and end with backtick
// not supported by Internet explorer
let text4 = `this string use " and ' quote with escape character!`;

// ******** String Methods ********* //

// to return length of string
console.log(text.length);

// to return character present at specific index
console.log(text.charAt(0));

// to retuen ascii code of character present at specific index
console.log(text.charCodeAt(0));

// to return specific index value itroduced in modern js
console.log(text.at(0)) ;

// return value at given index same as above
console.log(text[0]);

// to extract a specific  part of string
console.log(text.slice(0)); //will extract  from 0 index to onwards
console.log(text.slice(0,2)); //will extract from 0 index to 1 ..... less than second parameter 
console.log(text.slice(-12)); // if parameter is negative it will count from last this will start extracting from 12th value from last
// negative starts counting from 1 from last not 0

// to extract specific part just like above
// difference is that if parameter is negative it will consider it 0
console.log(text.substring(0,10));
console.log(text.substring(-12,10)); // output same as above

// to extract part just like slice method
// difference is that second parameter defines the length not ending 
console.log(text.substr(0,10));
console.log(text.substr(2,10)); // will extract 10 characters starting from 2  
console.log(text.substr(2)); // will extract from 2 to onwards
console.log(text.substr(-2)); // will count from last same as slice

// to convert string to uppercase
console.log(text.toUpperCase()); // faster and prefer for most
console.log(text.toLocaleUpperCase()); // only for specific languages like turkish

// to convert string to lowercase
console.log(text.toLowerCase()); // faster and prefer for most
console.log(text.toLocaleLowerCase()); // only for specific languages like turkish

// to join 2 strings 
console.log(text.concat(text2));  // oroginal strings remains same
console.log(text);

// to remove empty spaces 
console.log(text.trim()); // remove from start and end both
console.log(text.trimEnd()); // remove from end
console.log(text.trimStart()); // remove from start

// to add extra elements in string like padding with specific chatacter to pad
// will pad the string to reach length given
console.log(text.padEnd(20,"z")); // first deifnes total length of string
console.log(text.padStart(20,"z")); // will pad at start
console.log(text); // original string remains same

// to repeat a string for specified time
console.log(text.repeat(2));

// to replace something inside a string with another string
console.log(text.replace("This", "this")); // will replace first parameter with second  
// only replace first match and case sensitive 
// to remove case sensitivity use i flag
// to replace all matches use g flag
console.log(text.replace(/this/ig, "that"));

// to convsert string into array
console.log(text.split()); // default will convert whole string in array at index 0
console.log(text.split(" ")); // will split according to specified character