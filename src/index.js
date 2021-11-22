// @flow

// VARIABLES

let name: string = 'John doe'


// INTERFACE
let person: Person;

person = {
    name: 'John',
    age: 30,
}

interface Person {
    name: string,
    age: number,
    hasKids?: boolean
}

// FUNCTIONS

function greeting(name:string):string {
    return 'hello ' + name
}

console.log(greeting('Mario'))


// UTILITY TYPES
// literal Unions
type Suit = "Diamonds" | "Clubs" | "Spades"

const clubs: Suit = 'Clubs'