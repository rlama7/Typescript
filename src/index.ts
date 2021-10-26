// let id: number = 5;

// console.log(id); // 5

/**
 * Basic Types
 * 
 * - number
 * - string
 * - boolean
 * - any (number, string, boolean)
 * - array of type string/number/boolean/any
 * 
 */

let id: number = 5;
let company: string = 'Hello World!';
let isPublished: boolean = true;
let x: any = 'Ola!'

// Array of type number
let count: number[]  = [0, 1,2,3,4,5,6,7]
count = [100]
// Array of type string
let words: string[] =['alpha', 'beta', 'gamma']
words = ['delta']
// Array of type any
let mix: any[] = [0, 1, 'Hello', true]
mix = [123.4567]

// Tuple --> can include two values of different types
let person: [number, string, boolean]= [1, 'Ray', true];
// Tuple Array --> 
let employee: [number, string][]
employee = [
	[1, 'Jen'],
	[2, 'Ben'],
	[3, 'Pen'],
	[4, 'Ren'],

]

/**
 * Union --> holds data of two different types
 */
let pid: string | number
pid = '007' // string
pid = 7 // number

/**
 * Enum --> allows to define set of named constants either numberic or strings
 */
enum Direction {
	Up,  // default index val = 0 --> we could change the default index val by --> Up = 1 assigning the default value now rest index value increments by +1
	Down, // index val = 1
	Left, // index val = 2
	Right // index val = 3
}

/**
 * enum that accepts string
 */
enum Color{
	Red = 'RED', 
	Green = 'GREEN', 
	Blue = 'BLUE', 
}