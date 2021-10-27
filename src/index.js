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
var id = 5;
var company = 'Hello World!';
var isPublished = true;
var x = 'Ola!';
// Array of type number
var count = [0, 1, 2, 3, 4, 5, 6, 7];
count = [100];
// Array of type string
var words = ['alpha', 'beta', 'gamma'];
words = ['delta'];
// Array of type any
var mix = [0, 1, 'Hello', true];
mix = [123.4567];
// Tuple --> can include two values of different types
var person = [1, 'Ray', true];
// Tuple Array --> 
var employee;
employee = [
    [1, 'Jen'],
    [2, 'Ben'],
    [3, 'Pen'],
    [4, 'Ren'],
];
/**
 * Union --> holds data of two different types
 */
var pid;
pid = '007'; // string
pid = 7; // number
/**
 * Enum --> allows to define set of named constants either numberic or strings
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // index val = 3
})(Direction || (Direction = {}));
