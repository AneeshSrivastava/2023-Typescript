// Source: Section 9 => 48 -> 55

interface Customer {
    readonly id: number
    name: string
    phoneNumber? : number
    isProUser(): boolean
    greet: () => string
}

const user : Customer = {
    id: 34239045,
    name: 'Aneesh',
    isProUser: () => {
        return true
    },
    greet(){
        return `Hello ${this.name}!`
    }
}