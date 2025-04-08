// let muduradi = "ahmethamdi"
// let sinifbaskani = "ali atıf"
// console.log("Müdür Adı:" + muduradi);
// console.log("Sınıf Başkanı:" + sinifbaskani);

//  console.log("Sunum yapacak kişiler :" + muduradi + " ve " + sinifbaskani);

// let öğrenciadi = "onur aslan";
// console.log(typeof öğrenciadi);

// let öğrenciyasi = 25;
// console.log(öğrenciyasi);
// console.log(typeof öğrenciyasi);

// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1.toString() + sayi2.toString();
// console.log(toplam);
// console.log(typeof toplam);

// let sayi3 = 30;
// let sayi4 = 40;
// console.log(sayi3 > sayi4);
// console.log(typeof (sayi3 > sayi4));

// let isim;
// console.log(isim);
// console.log(typeof isim);

// let suankiyil = 2025;
// let gecernot = 50;
// let öğrenci1 = "onur aslan";
// let öğrenci1dogumyili = 2007
// let öğrenci1notlari = [50, 60, 70];
// let öğrenci1yasi = suankiyil - öğrenci1dogumyili;
// console.log(öğrenci1 , "in yaşı:" , öğrenci1yasi);
// let öğrenci1ortalama = (öğrenci1notlari[0] + öğrenci1notlari[1] + öğrenci1notlari[2]) / 3;
// console.log(öğrenci1 , "in not ortalaması:" , öğrenci1ortalama);
// let öğrenci1geçtimi = öğrenci1ortalama >= gecernot ? "geçti" : "kaldı";
// console.log(öğrenci1 , "geçti mi?" , öğrenci1geçtimi);

// // 1- aritmetik operatörler
// let sayi1 = 10;
// let sayi2 = 20;
// let sayi3 = 30;
// let sonuc;

// sonuc = sayi1 + sayi2;
// sonuc = sayi1 - sayi2;
// sonuc = sayi1 * sayi2;
// sonuc = sayi1 / sayi2;
// sonuc = sayi1 % sayi2;
// sonuc = sayi1++;
// sonuc = sayi1--;
// console.log(sonuc);

// // 2- atama operatörleri
// sonuc = sayi1
// sonuc += sayi1;
// sonuc -= sayi1;
// sonuc *= sayi1; 
// sonuc /= sayi1;
// sonuc %= sayi1;
// sonuc = 2;
// sonuc **= sayi1;
// console.log(sonuc);

// // 3- karşılaştırma operatörleri
// sonuc = sayi1 == sayi2;
// sonuc = sayi1 === sayi2;
// sonuc = sayi1 != sayi2;
// sonuc = sayi1 !== sayi2;
// sonuc = sayi1 > sayi2;
// sonuc = sayi1 < sayi2;
// sonuc = sayi1 >= sayi2;
// sonuc = sayi1 <= sayi2;
// console.log(sonuc);

// // 4- mantıksal operatörler
// sonuc = sayi1 < sayi2 && sayi1 < sayi3;
// sonuc = sayi1 < sayi2 || sayi1 < sayi3;
// sonuc = !(sayi1 < sayi2);
// console.log(sonuc);



// //  if else yapısı
// const username = "onur";
// const password = 12345;
// if (username == "onur" && password == 1234) {
//     console.log("giriş başarılı");
// } else {
//     console.log("giriş başarısız");
// }  

// //  if else if yapısı
// if (username == "onur") {
//     if (password == 1234) {
//         console.log("giriş başarılı");
//     } else {
//         console.log("kullanıcı adı yada şifre yanlış");
//     }
// }else {
//     console.log("kullanıcı bulunamadı. . .");
// }

// // backtick kullanımı
// const username = "Onur";
// const soyad = "Aslan";
// const yas = 25;
// const bio = `Merhaba benim adım ${username} soyadım ${soyad} yaşım ${yas}`;
// console.log(bio);

// // karakter sayısı bulma
// const webUrl = "http://sadikturan.com";
// const webname = "Sadık Turan";
// sonuc = webUrl.length;
// sonuc = webname.length;
// sonuc = webname.replaceAll("","").length;
// console.log(sonuc);

// const username = "onur";
// const password = '12345';

// if (password.length >= 6) {
//     console.log("şifre oluşturuldu") ;
    
// }else {
//     console.log("şifre en az 6 karakter olmalıdır");
// }

// password.length >= 6 ? console.log("şifre oluşturuldu") : console.log("şifre en az 6 karakter olmalıdır");

// let math = 5;
// let sonuc = 25;
// sonuc = parseFloat("25.5");
// sonuc = parseInt("a25");
// sonuc = parseInt("25a");
// sonuc = isNaN("25");
// sonuc = isNaN("a25");
// console.log(sonuc);

// let MyNumber = 10.54346342;
// sonuc = MyNumber.toPrecision(5);
// sonuc = MyNumber.toFixed(2);
// sonuc = MyNumber.toString();
// console.log(sonuc);

// sonuc = Math.round(3.6);
// sonuc = Math.round(3.5);
// sonuc = Math.ceil(3.2);
// sonuc = Math.floor(3.9);
// sonuc = Math.sqrt(16);
// sonuc = Math.abs(-10);
// sonuc = Math.pow(2,4);
// sonuc = Math.max(10,-1,100,32);
// sonuc = Math.min(10,-1,100,32);
// console.log(sonuc);

// let tarih = new Date();
// console.log(tarih);

// let sonuc = tarih.getDay();
// sonuc = tarih.getDate();
// sonuc = tarih.getMonth();
// sonuc = tarih.getFullYear();
// sonuc = tarih.getHours();
// sonuc = tarih.getMinutes();
// sonuc = tarih.getSeconds();
// sonuc = tarih.getMilliseconds();
// sonuc = tarih.getTime();
// console.log(sonuc);

// let doğumtarihi = new Date("2007-03-01");
// sonuc = tarih.getFullYear() - doğumtarihi.getFullYear();
// console.log(sonuc);

// const  urunler = [apple, samsung, xiaomi, huawei, asus, lenovo, casper, hp, dell, monster];
// const  fiyatlar = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
// console.log(urunler);
// console.log(urunler[0]);
// console.log(fiyatlar);
// console.log(fiyatlar[0]);
// console.log("ürünümüzün adı:" + urunler[0] + "ürünümüzün fiyatı:" + fiyatlar[0]);

// const urun1 = {samsung, 2000};
// const urun2 = {apple, 1000};
// console.log(urun1);
// console.log(urun2);

// const yeniurun = {'xiaomi', 3000, ['apple,2000']};
// console.log(yeniurun);
// console.log(yeniurun[0]);
// console.log(yeniurun[1]);
// console.log(yeniurun[2]);
// console.log(yeniurun[2][0]);

// let products =  ["Tomato","Cucumber","Onion"];
// let products2 = ["Apple","Banana","Orange"];
// let products3 = ["Carrot","Potato","Garlic"];
// result = products.concat(products2, products3);
// console.log(result);
// console.log(products3);

// let müşteriler= ["onur","ali","veli","ayşe","fatma"];
// müşteriler.push("mehmet");
// müşteriler.unshift("ayşe");
// consoleçlog(müşteriler);

// let müşteri1 = {["asus","monster","hp"[1000,2000,3000]]};

// console.log(müşteri1);
// console.log(müşteri1[1]);
// console.log

// // objeler

// let customers1 = {name: "Onur Aslan", surname:"can" , age: 25, }
// let customers2 = {name: "Ali Veli", surname:"can" , age: 30, }
// let customers3 = {name: "Ayşe Fatma", surname:"can" , age: 35, }
// console.log(customers1.name);
// console.log(customers2.surname);
// console.log(customers3.age);

// let ürünler = [{name: "TV", price: 1000}, {name: "Laptop", price: 2000 }, {name: "Phone", price: 3000}];
// console.log(ürünler);
// console.log(ürünler[2]);
// console.log(ürünler[2].price);

// // for döngüsü
// for (let i = 0; i < 101; i++) {
//     console.log(i);
// }

// let sayılar = [13,21,331,34,55,46,37,81,94,100];
// console.log(sayılar[0], sayılar[1], sayılar[2], sayılar[3], sayılar[4], sayılar[5], sayılar[6], sayılar[7], sayılar[8], sayılar[9]);
// toplam = 0;
// for (i = 0; i < sayılar.length; i++) {
//     toplam+= sayılar[i];
// }
// console.log("Toplam =",toplam);

// const user= {name: "Onur", surname: "Aslan", age: 25};
// console.log(user);
// for (key in user) {
//     console.log(key, ",",user[key]);
    
// }

// const users = [
//     {name: "Onur", surname: "Aslan", age: 25},
//     {name: "Ali", surname: "Veli", age: 30},
//     {name: "Ayşe", surname: "Fatma", age: 35},
// ];
// for (i = 0; i < users.length; i++) {
//     console.log(users[i].name, users[i].surname, users[i].age);
    
// }

// // fonksiyonlar
// function yashesaplama(dogumyili) {
//     let yil= new Date().getFullYear();
//     console.log(yil - dogumyili);
// }
// yashesaplama(2007);
// yashesaplama(2005);
// yashesaplama(2003);


