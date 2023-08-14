// * ARRAY EXERCISES

// * Creating an Array
let myFirstArray = ["Array", 1, true];

/**
 *  * Question 1
 * 
 * Create an array with 5 elements. The elements can have any 
 * value you want. 
 * 
 * Return the array you created
 * 
 * @returns {Array}
 */
function myFirstArray() {
    // TODO Finish the function
}

/**
 *  * Question 2
 * 
 * Given an array called arr, use console.log() to prNumber out the first three
 * elements of arr.
 * 
 * @param {String[]} arr 
 */
function accessElements(arr) {
    // TODO Finish the function
}

/**
 * * Question 3
 * 
 * Given an array called arr, reassign the first three elements to 
 * numbers. You should replace arr's old values with 1, 2, and 3.
 * Return the array.
 * 
 * @param {String[]} arr 
 * @returns {Array}
 */
function reassignElements(arr) {
    // TODO Finish the function
}

// TODO Reassign index 1 of myArray1 to 50
// You can do this by accessing the index like you did above, then assign it to 50 the same way you would with a variable (Ex: variable = 50;)



// TODO Reassign index 2 of myArray1 to 49

// * Array Length
myArray1.length; // This has a value of 6

/**
 * * Question 
 * 
 * Given an array called arr, return the length of the array.
 * 
 * @param {Number[]} arr 
 */
function findArrayLength(arr) {
    // TODO Finish the function
}

// TODO Find the length of myFirstArray
// You can do this by using the array's name, followed by a . then length

// TODO Find the length of mySecondArray

// * Adding Elements

myArray1.push(7); // Adds 7 to myArray1 and then returns the new length

// TODO Add your name to myArray1
// You can do this by using the push() method and using your name (as a string) as a parameter. Ex: mySecondArray.push("bart simpson");

// TODO Create an array called myName and then add your first, middle (if you have one), and last names to it using push()


// * toString

myArray1.toString(); // Returns myArray1 in string form

// TODO Convert myName to a string using toString()
// Do this by calling toString() on myName, like you did with push()

// TODO Convert myFirstArray to a string with toString()

// * join()

myArray1.join(); // Works like toString(), but can have other "delimiters" that separate the elements

// TODO Create a string of myArray1, but separate the array elements with whitespace instead of commas
// You can accomplish this by putting a pair of quotations marks with a single space between them as an argument (like this " ")


// TODO Create a string of myArray1, but separate the array elements with this character: |

myArray1.pop(); // Removes and returns the last element of myArray1

// TODO Remove the last element of myName
// You can do this with the pop() method. No parameter needed


// TODO Remove your middle (or first) name from myName


const dogs = ["Pug", "Lab", "Corgi", "Malinois"];
dogs.shift();   // Removes the first element from dogs

// TODO Remove "Lab" from dogs
// Use the shift() method once to remove the first element

// TODO Remove "Corgi" from dogs


dogs.unshift("Corgi"); // Adds "Corgi" back to the front of dogs

// TODO Add "Lab" back to the front of dogs
// Use unshift() with "Lab" as your parameter

// TODO Add a new breed of dog (pugs are gross) to dogs

// * splice()

dogs.splice(1, 1, "Chihuahau"); // Starting at the first element, this removes one dog, then adds "Chihuahua"

// TODO Add a new dog breed to the end of dogs using splice()
// You can do this by making the first parameter the length of dogs - 1, then setting the deleteCount to 0, 
// and finally adding your dog breed as a parameter

// TODO Remove the index 0 of dog, then add a new dog breed


// * concat()

myFirstArray.concat(mySecondArray); // Adds the elements of myFirstArray to mySecondArray

// TODO Add the elements of mySecondArray to myFirstArray again
// We can see how to do this up above

// TODO Add the elements of dogs to myFirstArray

// * slice()

myFirstArray.slice(0, 2); // Returns a new array with the first two elements of myFirstArray

// TODO Get a new array of all elements of myFirstArray 
// You can do this by using slice(), starting at index 0 and ommitting the endIndex parameter

// TODO Get a new array with elements 2 - 4 of dogs
// Remember, element's index is one less than their position

// * sort()

dogs.sort(); // Sorts dogs by alphabetical order 

// TODO Resort dogs in reverse alphabetical order
// You can use the reverse() method for this

// TODO Resort dogs again, in alphabetical order


