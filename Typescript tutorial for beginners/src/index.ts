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
    console.log(`Calling sample function whose args is ${document}`);
}
sample_function(str_var)

// Arrays
let arr: number[] = [1, 2, 3, 4];
let any_arr = [];
any_arr[0] = 2
any_arr[1] = 4
console.log(`This is an array: ${any_arr}`)

// Tuples
let sample_tup: [number, string] = [342, 'Hello Aneesh']
console.log(`This is a sample tuple: ${sample_tup}`)

//Enums
enum Size { Small = 1, Medium, Large };
let mySize = Size;
console.log(`An enum with default args: ${mySize}`)

// Enums efficient compilation
const enum some_example_enum { Low, Medium, High }; // Less lines of code generated in JS file
let example = some_example_enum.High;
console.log(`This is an enum: ${example}`)

// Function example
function CalculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.5
}

let tax = CalculateTax(10_000, 2023)
console.log(`This years tax is : ${tax}`)

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
    retire: (date: Date): Date =>{
        console.log(date)
        return date
    }
}
//const currentDate= new Date()

console.log(console.log(emp))
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

// Nullable types:
function greet(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
    console.log("Hola!, I am greet function!")
}
greet(undefined)

// Optional Chaining
type Customer ={
    birthday?: Date
}
function getCustomer(id: number ): Customer | null{
    return id === 0? null : {birthday : new Date()}
}
let customer= getCustomer(1);
// Optional property accessors operator '?.'
console.log(`Happy birthday: ${customer?.birthday?.getFullYear()}`);

// Optional element accessors operator
// customers?.[0] --> Access the 1st value of customers array only if that value is not null or undefined

//Optional Call
let log: any = null
log?.(a) // Only call this function if its defined

// Interface
interface appUser {
    email: string, 
    userId: number,
    googleId? : number, //optional parameter
    startTrial: () => string
    getCoupon(couponname: string, value: number): number
}

const our_user: appUser = {
    email: 'a@a.com',
    userId: 2211,
    googleId : 313,
    startTrial: () => {
        return `Trial started`
    },
    getCoupon(name: 'Aneesh', value: 10){
        console.log(`Congrats ${name}`)
        return value
    }

}
console.log(`Interface user is: ${JSON.stringify(our_user)}`)
