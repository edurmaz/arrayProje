
let phonenum = "12345689456"; 

phonenum=phonenum.split("")
let phone1=phonenum.slice(0,1);
let phone2=phonenum.slice(1,4);
let phone3=phonenum.slice(4,7);
let phone4=phonenum.slice(7);


console.log(phone1)
console.log(phone2)
console.log(phone3)
console.log(phone4)
let phonenum1 = ["+",...phone1, " (", ...phone2, ")", ...phone3, " ", ...phone4];
phonenum1=phonenum1.join("");
console.log(phonenum1);













