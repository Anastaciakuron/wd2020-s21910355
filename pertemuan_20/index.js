//variabel

//let & const
//let _umur = 25;
//_umur =26;
//let nilai = 95.5;
//let sudahMenikah = true;
//let $nama = "John";
//console.log(_umur);
//console.log($nama);

//const tahunLahir = 2010;
//console.log(tahunLahir);


//Arithmetic Operator (+,-,*,/)


//let angka1 = 10;
//let angka2 = 20;
//console.log(angka1 + angka2);

//let umur = 30;
//let namaDepan = "John";
//let namaBelakang = "Doe";
//console.log("Nama Saya  "namaDepan + " " + namaBelakang + ". Umur saya adalah "+ umur + "tahun");

//Operator Perbandingan

//let angka1 = 10;
//let angka2 = 11;

//console.log(angka1 <= angka2);

//ternary operator
//let angka =5;
//let hasil = angka < 0? "Negatif" : "positif";
//console.log(hasil);

//operator logika
//let kondisi1 = true;
//let kondisi2 = true;

//console.log(kondisi1 || kondisi2);
//console.log(!kondisi1);

//let angka = prompt("Masukkan angka : ");
//console.log("angka yang dimasukkan adalah" + angka);


//Exercise #7

let berat = prompt("Masukkan berat anda = ");
let tinggi = prompt("Masukkan tinggi anda = ");
let hasil = berat / tinggi*tinggi;
console.log("BMI = "+ hasil );

if (hasil < 18.5)
{
    console.log("Underweight");
}
else if(hasil <= 22.9)
{
    console.log("Normarl");
}
else if(hasil <24.9)
{
    console.log("OverWeight");
}
else
{
    console.log("Obese")
}