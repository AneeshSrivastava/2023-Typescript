interface Chicken {
    breed: string
    eggsPerWeek: number,
    name: string,
    age?: number
}

const norma : Chicken = {
    breed: "regular",
    eggsPerWeek: 4,
    name: "Norma",
    age: 4
}
console.log(norma.name);
console.log(norma.age);