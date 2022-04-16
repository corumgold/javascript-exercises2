const reverseString = function(string) {
let arrayedString = Array.from(string);
let revArrayedString = arrayedString.reverse();
let reversedString = revArrayedString.join("");
return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
