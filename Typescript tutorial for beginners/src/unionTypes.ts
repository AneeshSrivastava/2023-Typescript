
let score: number | string;
score = 33
score ='33'

type normalUser = {
    id: number;
    name: string;
}

type adminUser = {
    id: number;
    username: string;
}

let aneesh: normalUser | adminUser

aneesh ={
    id : 1,
    name : '',
    username: ''
}

aneesh.id = 23
// aneesh.name= 'name' // Error
// aneesh.username = 'aneesh@google.com' //Error