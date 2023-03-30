// Looping through list via map:

// const heros = ["ironman", "spoderman", "black widow"]

// heros.map((heros) => {
//     console.log(`Hero is ${heros}`)
// })
// heros.map(heros => {
//     console.log(heros.toUpperCase())
// })

// console.log(heros)


// --------------------------------------------------------------------------------------------------------
// Functions and objects:
// function getUserCourse(name: string, isPaid: boolean):{courseId: number, courseName: string}{
//     if (name === 'Aneesh' && isPaid)
//         return {courseId: 1, courseName: 'typeMaster101'}
//     else
//         return {courseId: 2, courseName: 'typeMaster102'}
// }
// console.log(
//     getUserCourse('User', true)
// )
// --------------------------------------------------------------------------------------------------------
//Type alias
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     if (user.isActive === true)
//         return user
//     else
//     return user
// }

// createUser({name:'Aneesh', email:'', isActive: false})

// --------------------------------------------------------------------------------------------------------
// READONLY and optional

type User = {
    readonly _id : string; // readonly value
    name: string;
    email: string;
    isActive: boolean;
    creditCardNumber?: number // optional
}

let myUser : User = {
    _id : '1234',
    name: 'Auneesh',
    email: '',
    isActive: false
}

myUser.email = 'Auneesh@gmail.com'
// myUser._id = '12345' --> Gives error

type cardNumber ={
    num: string
}
type cardDate ={
    date: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCard: cardDetails ={
    num: '123',
    date: '30-3-23',
    cvv: 765
}