// var c = 300 not ideal of block scope
if (true) {
    let a = 10
    const b = 20
    // console.log("inner: ", a);
}
// console.log(c);

function one (){
    const username = "anuj"

    function two (){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(webside); out of the scope

    // two()
}

// one()


if (true) {
    const username = "anuj"
    if (username === "anuj") {
        const website = " youtube"
        // console.log(username + website)
    }

}


// ..............................

function addone(num){
    return num+1
}
// console.log(addone(5));
addone(5)


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))
