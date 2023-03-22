// Introduction
console.log("Hello Aneesh!");
let a: number = 10;
if (a < 50)
    a += 10;
console.log("Aneesh has the number as: " + a);

// Variables
let num: number = 3;
let str_var = "some string";
let any_var;
function sample_function(document: any) {
    console.log(document);
}

// Arrays
let arr: number[] = [1, 2, 3, 4];
let any_arr = [];
any_arr[0] = 2
any_arr[1] = 4

// Tuples
let sample_tup: [number, string] = [342, 'Hello Aneesh']

//Enums
enum Size { Small = 1, Medium, Large };
let mySize = Size.Medium;
console.log(mySize)

// Enums efficient compilation
const enum some_example_enum { Low, Medium, High }; // Less lines of code generated in JS file
let example = some_example_enum.Medium;
console.log(example)

// Function example
function CalculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.5
}

let tax = CalculateTax(10_000, 2023)
console.log(tax)

// Objects
let employee: {
    readonly id: number,
    name: string,
    retire:(date: Date) => void //retire function with date as argument and returns void
} = {
    id : 1,
    name: "Aneesh",
    retire:(date: Date) => {
        console.log(date)
    }
}

// Objects with type aliases
type Employee ={
    readonly id: number,
    name: string,
    retire:(date: Date) => void //retire function with date as argument and returns void
}

let emp: Employee ={
    id : 1,
    name: "Aneesh",
    retire:(date: Date) => {
        console.log(date)
    }
}

// Union types:
function kgToLbs(weight: number | string): number{
    // Narrowing
    if (typeof weight === "number")
        return weight * 1.2
    else
        return parseInt(weight) * 2.2
}
kgToLbs(10)
kgToLbs('10')

// Intersection types:
type Draggable ={
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable | Resizable

let textBox: UIWidget ={
    drag: () => {},
    resize: () => {}
}

// Literal types
type Quantity = 50 | 100
let quantity: Quantity = 100
type Metric = 'cm' | 'inch'
