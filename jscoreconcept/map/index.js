/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
// const squared = nums.map((num) => Math.sqrt(num));
// console.log(squared);
const square = nums.map((num) => num * num)
// console.log(square);

// console.log(nums);





/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
// + name.slice(1)
// 
const capitalized = names.map(
    name => name.charAt(0).toUpperCase() + name.slice(1)
)

// console.log(capitalized);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/
let nampam = ["Bulbasaure", "Charmander"]
let res = nampam.map((item) => `<p>${item}</p>`)
console.log(res);


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

let result = pokemon.map((item) => `<h3>${item}</h3>`)
console.log(result);
