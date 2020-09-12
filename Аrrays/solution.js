const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

// Reverse the array
console.log(arr.reverse())

// // Create a new copy of the array
console.log(arr.slice())

// // Find if the number 10 is in the example array of integers and return true or false
console.log(arr.includes(10))

// Find the first element greater than 6 in the example array of integers and return it
console.log(arr.find((el) => el > 6))

// Remove duplicates from in the example array of integers
console.log([...new Set(arr)])

