// Array

let nilai = [20,30,40,50,60];

for(let i=0; i< nilai.length; i++)
{
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);
// nilai[2]=90;
// console.log(nilai[nilai.length - 1]);

let john = ["john","Doe", 22, true];
console.log(john[john.length -1]);
console.log(john);

//toString
console.log(john.toString());
//join
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));
//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));
//shift()
john.shift();
console.log(john.join(" - "));
//unshift()
john.unshift("John");
john.unshift("prof");
console.log(john.join(" - "));

//splice()
let nama = ["anneth", "anastacia","alvaro", "anita"];
nama.splice(1,0, "NETH", "SASA");
console.log(nama);
//concat()
let benda = ["kunci", "pensil", "pen", "book"];
let names = john.concat(nama, benda );
console.log(names);
//slice()
let bendasatu = benda.slice(0,2);
let bendadua = benda.slice(2);
console.log(bendasatu);
console.log(bendadua);
//sort()
let bilangan = [13, 33, 1, 5, 3];
benda.sort();
console.log(benda);

let urutanDariTerkecil = function(a, b)
{
    return a - b;
}
let urutDariTerbesar = function(a, b)
{
    return b - a;
}
console.log(bilangan.sort(urutanDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));
//reverse()
let warna = ["pink", "putih", "hitam", "biru"];
warna.reverse();
console.log(warna);