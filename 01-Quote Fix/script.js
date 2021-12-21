//Transform a string into an array and fix it!
//"Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";

let favoriteQuote="Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand. – Martin Fowler. Agile Software Design";
favoriteQuote=favoriteQuote.split(" ")

console.log(favoriteQuote)
console.log(favoriteQuote.length) //28

favoriteQuote.pop();
console.log(favoriteQuote)
console.log(favoriteQuote.length) 

favoriteQuote.push("Development" ,"ThoughtWorks ", "Inc");
console.log(favoriteQuote);

let indexNum=favoriteQuote.indexOf("body"); // burası bize index numarasını döndürüyor.

favoriteQuote[indexNum]="fool"; // index numarasına yeni değer atıyor.
console.log(favoriteQuote);

favoriteQuote.shift(); // ilk değeri siler.
console.log(favoriteQuote);

favoriteQuote.unshift("Any");
console.log(favoriteQuote);

let indexNum1=favoriteQuote.indexOf("very");
console.log(indexNum1);

favoriteQuote.splice(indexNum1,5, "computer");

console.log(favoriteQuote);

favoriteQuote= favoriteQuote.join(" "); // array dizisini string ifadeye çevirir.
console.log(favoriteQuote);


