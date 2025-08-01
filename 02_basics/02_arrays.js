const marvel_heros = ["thor","spiderman","hulk"]
const dc_heros = ["batman","superman","flash"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heros]

// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Anuj"));
console.log(Array.from("Anuj"));
console.log(Array.from({name: "Anuj"}));

let score1 = "p1"
let score2 = "p2"
let score3 = "p3"


console.log(Array.of(score1, score2, score3));