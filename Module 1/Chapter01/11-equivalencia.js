var n = 0;
var o = new String("0");
var s = "0";
var b = false;
console.log(n === n); // true - same values for numbers
console.log(o === o); // true - non numbers are compared for their
console.log(s === s); // true - ditto
console.log(n === o); // false - no implicit type conversion, types
console.log(n === s); // false - types are different
console.log(o === s); // false - types are different
console.log(s == o); // verdadeiro
console.log(n == s); // verdadeiro
console.log(n == o); // verdadeiro
console.log(null === undefined); // false
console.log(o === null); // false
console.log(o === undefined); // false