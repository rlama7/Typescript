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

/**
 * Objects #1
 */
const user:{
	id: number, 
	name: string
} = {
	id: 1, 
	name: 'Ray'
}

/**
 * Objects #2
 */
type Player =  {
	id: number,
	name: string
}
const teamRoster: Player = {
	id: 1,
	name: 'David'
}

/**
 * Type Assertion
 */
let cid: any = 1 // initially cid is defined as any type
let customerId = <number>cid // now cid is of type number
customerId = cid as number	// anothe way to assert type

/**
 * Functions
 * define type of the input parameters and also the return type 
 */
function add(x:number, y:number): number {
	return x+y;
}
console.log(add(2,3)); //5

/** 
 * Function
 * if a function doesn't return then return type must be void
 */
function print(message: string | number): void {
	console.log(message);
}
console.log('Hello'); // Hello

/**
 * Interfaces used with functions and/or objects
 * type used with primitives
 * readonly property can not be reassigned
 * ? before field property signifies the field is optional
 */
interface BookInterface{
	readonly id: number
	author: string
	title: string
	yearPublished?: number | string 
}
const book: BookInterface = {
	id: 1, // read only can not be reassigned
	author: 'Sun Tzu', 
	title: 'The Art of War',
	yearPublished: '5th Century'  // optional TS won't complaing
}

book.title = 'The Age of Empire' // ok to reassign
// book.id = 101  // can not reassign since id is read only.

/**
 * Interface for functions
 */
interface MathFunc{
	(a:number, b: number): number
}

const sum: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

/**
 * Classes #1
 * 
 * classes can have field associated with access modifier:
 * public - default
 * protected - field with protected access modifier can not be accessed outside the class
 * private - ''							''										''
 */
class Person{
	private id: number 
	protected name: string 
	public address: string
	public DoB?: number // optional public field therefore no complain and not needed in constructor


	constructor(id: number, name: string, address: string){
		this.id = id
		this.name = name
		this.address = address
	} 

	register(){
		return `{this.name} is now registered.`
	}
}

const ray = new Person(1, 'Ray Love', '1 San Francisco CA');
const taylor = new Person(101, 'Taylor Swift', '101 Hollywood CA');
console.log(ray, taylor);
console.log(taylor.register());

/**
 * Classes using interface and keyword 'implements'
 */
interface AnimalInterface {
	id: number,
	name: string
	owner: string
	movement(): string
}
/**
 * Parent Class
 */
class Animal implements AnimalInterface {
	id: number
	name: string
	owner: string

	constructor(id: number, name: string, owner: string){
		this.id = id,
		this.name = name,
		this.owner = owner
	}

	movement() {
		return 'walking'
	}
}

/**
 * Sub Class
 * Extend properties from one class to another
 */
class Bear extends Animal{
	location: string

	constructor(id: number, name: string, owner: string, location: string) {
		super(id, name, owner) // extend properties from the parent --> Animal
		this.location = location; // additinal field
	}
}

const brown = new Bear (7, 'Brown Bear', 'Mr. Sam', 'Alaska');
console.log(brown.movement())  // even though Sub Class Bear doesn't have movement() defined it'll extend from Parent 

/**
 * Generics
 * Use <T> as a placeholder for Type
 * 
 */
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['Apple', 'Banana', 'Cherry']);

numArray.push(100); // pushing number to number array is ok 
strArray.push('Mango'); // pushing string to string array is ok
// strArray.push(1); // will generate error as Array of string will not accept number type.