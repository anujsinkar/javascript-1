const isUserLoggedIn = true
const temperature = 41

// if (temperature  < 50 ){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }

// const score = 200

// if (score > 100) {
//     let power = "fly" 
//     console.log(`User Power ${power}`)
// }

// const balance = 1000

// if (balance < 500){

//     console.log("less than 500");

// }else if(balance < 750){

//     console.log("less than 750")

// }else if (balance < 900){

//     console.log("less than 900")

// }else {
//     console.log("less than 1200")
// }


const userLoggedIn =true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true


if (userLoggedIn && debitCard ){
    console.log("Aloow to buy")
}


if (loggedInfromEmail || loggedInfromGoogle){
    console.log("user logged in")
}