/*Identify and fix the syntax errors in the arrays below.*/

var toys = ["car" ,"truck" ,"wagon"];           // virgül ve tırnak ekledik
console.log(toys);

var numbers = [9, 0, 1, 0.1, 5] ;            // köşeli parantezin içine aldık
console.log(numbers);       

var letters = ["a", "b", "c", "d"];           // sonuna noktalı bvirgül koyduk
console.log(letters);

var cars =["ford", "dodge", "kia", "lexus", "tesla"];          // eşittir ve tırnak koyduk
console.log(cars);

cars[10]="mercedes";           // mercedes'i tırnak içine aldık 10
console.log(cars);

cars.splice(0, 0, "bmw")         // 0 lar arası virgül bmw tırnak içine alındı.
console.log(cars);


var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var [ x , y , z ] = person;           // ?? array destraction yöntemiyle yaptık. person kısmını sildik.
console.log(`${x} ${y} is ${z} years old`)
