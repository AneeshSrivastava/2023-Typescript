// Source: Section 9 => 48 -> 55

interface Customer {
    readonly id: number
    name: string
    phoneNumber? : number
    isProUser(): boolean
    greet: () => string
}



// Interfaces Vs Types ----------------------------------------


// we can re-open and interface and add properties
interface Customer {
    moneyInvested: () => number
} 

// interfaces can extend other interfaces:
interface kiteUser extends Customer{
    kiteId: number,
    rating(): string
}
interface coinUser {
    coinId: number
    mutualFunds: string[]
}

// Interface can extend multiple interfaces
interface zerodhaUser extends kiteUser, coinUser {
    panNumber: number
    isAdharVerified(cardNumber: number) : boolean
}


type investorType = "CNC" | "IntraDay"


const exPox : Customer = {
    id: 34239045,
    name: 'Aneesh',
    isProUser: () => {
        return true
    },
    greet(){
        return `Hello ${this.name}!`
    },
    moneyInvested() {
        return 10000
    }
}
const superUse : zerodhaUser = {
    id: 34239045,
    name: 'Aneesh',
    isProUser: () => {
        return true
    },
    greet(){
        return `Hello ${this.name}!`
    },
    moneyInvested() {
        return 10000
    },
    coinId: 120938134,
    isAdharVerified(cardNumber=259875){
        return false
    },
    kiteId:2095804,
    mutualFunds:['small', 'mid'],
    panNumber:203948209345,
    rating(){
        return 'good'
    }
}