// console.log("JavaScript DOM");

// const person = ["john", "programmer", true];

// const person = {
//     name: "john",
//     age: 24,
//     job: "programmer",
//     isMarried: true,
//     sayHello: function (){
//         console.log("Hello World");
//     },
// };

// person.age=25;
// person["address"]= "manado";

//  console.log(person.name);
//  console.log(person["age"]);
 
// delete person.address;
// console.log(person);

// person.sayHello();

let title = document.getElementsByTagName("h1")[0].innerText;


title = document.getElementById("header2").innerText;
console.log(title);

let umur = document.getElementById("umur").value;
console.log(umur);

function helloWorld()
{
    let value =document.getElementById('umur').value ;
    document.getElementsByTagName("p")[1].innerText= value;
    document.querySelector(".header").style.color="red";
    document.querySelector(".header").style.fontSize = "3em";

    let span = document.getElementsByTagName("span")[0];
    span.style,color = "green";
    span.style.fontSize = "1em";
}
