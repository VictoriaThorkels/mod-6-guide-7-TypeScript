// "lodash" is a third-party liabrary that is installed in the terminal through a command and then imported in the code, like so
import * as _ from 'lodash';


// This wa just a test to see if it would compile into a new file
async function hello () {
    return 'world'
}

// Generics is used to use a type internally inside of a class or function
class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23)


// Array
// I can force a specific type like number so that the array only returns number values
// By adding the ? behinde the values it makes the value opptional and there for not required 
type MyList = [number?, sting?, boolean]

const arr: MyList = []

arr.push(1)
// If we were to uncomment out this section bellow we would see 2 errors, because they are not number types
/* 
arr.push('23')
arr.push(false)
*/


// Function, with a type and value
// The "number" makes it so that we can only pass a number value, otherwise an error will appear
// "string" an "toSting" is the type that I set, but I have added the "toSting" to implement this function correctly
// "toString" clears out the error that would otherewise appear 
// If our function does not return a value or returns a side effect then you can switch out "string" for "void" (commonly used for event listeners)
function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

pow(5, 10)


// "interface" inforces the shape of an object, without this you would get bugs in your code
// First name and last name is required but the "any" alows us to add an additional property
interface Person {
    first: string;
    last: string; 
    [key: sting]: any
}

const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2: Person = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
}


// Here I created a custom type 
type Style = 'bold' | 'italic' | 23;

const font: Style;

font = 'something';


// Here is a code to show you one of the two ways to stronge write your code
// "any" is used to opt out of the TS compiler that would otherwise not allow you to to write it without type checking it (aka error)
/* Now if you were to strong type your code "explicitly", you could skip the physical number and add a "number" annotation,
but then you would need to take away the string value '23', because you could not assign it that type*/
const lucky: any = 23;

lucky = '23'