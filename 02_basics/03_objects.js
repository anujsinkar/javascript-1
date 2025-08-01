const mySym = Symbol("key1")

const JsUser = {
     name: "Anuj",
    "full name": "Anuj Sinkar",
    [mySym]: "mykey1",
    age: 21,
    location: "Pune",
    email: "anujsinkar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(["full name"])
// console.log(JsUser[mySym])

JsUser.email = "anuj@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anuj18548@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());