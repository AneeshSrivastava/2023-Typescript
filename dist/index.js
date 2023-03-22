"use strict";
console.log("Hello Aneesh!");
let a = 10;
if (a < 50)
    a += 10;
console.log("Aneesh has the number as: " + a);
let num = 3;
let str_var = "some string";
let any_var;
function sample_function(document) {
    console.log(document);
}
let arr = [1, 2, 3, 4];
let any_arr = [];
any_arr[0] = 2;
any_arr[1] = 4;
let sample_tup = [342, 'Hello Aneesh'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
;
let example = 1;
console.log(example);
function CalculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.5;
}
let tax = CalculateTax(10000, 2023);
console.log(tax);
let employee = {
    id: 1,
    name: "Aneesh",
    retire: (date) => {
        console.log(date);
    }
};
let emp = {
    id: 1,
    name: "Aneesh",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 1.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10');
//# sourceMappingURL=index.js.map