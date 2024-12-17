// let str = "salom"
// let str1 = 'aleykum'
// let str2 = `salom ${str1}`
// console.log(str2);


// let names = "murtazo"
// console.log(names.charAt(0));
// console.log(names.at(-1)); // minusaam megira

// let a = 2024
// console.log(typeof a);
// console.log(typeof a.toString());

// let imya = "Ashur"
// let familiya = "Ghoz"
// console.log(imya.concat(" " + familiya));

// let password = " 123 "
// console.log(password);
// console.log(password.trim());

// let jumla = "jumlara berahmsh miyova kalima hast yo ne"
// console.log(jumla.includes("miy"));

// let str = "salom komp"
// console.log(str.indexOf(" "));


// let str = "today is sunny"
// console.log(str.replace("sunny", "rainig"));

// let str = "ay ya index to indexi digara mebrora"
// console.log(str.substring(0,18));
 
// let str = "rangi substring neki indexi minusaam megira "
// console.log(str.slice(-15,-1));

// let str = "Hello world"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str = "Nomho Ali Ashur Akmal"
// console.log(str.split(" "));

//yakum
// function  modifyLast(a,b){
//      let s = a.at(-1)
//      let c = a.substring(0,a.length-1) 
//      return c + s.repeat(b) 
// }
// console.log(modifyLast("Hello",5));

//duyum
// function  firstLast (a){
//     let s = a.at(0) + a.at(-1)
//     return s 
// }
// console.log(firstLast("hello"));

//seyum
// function changetype(a){
//     if (typeof a=="string"){
//         return Number(a)
//     }
//     else {
//         return a.toString()
//     }
// }
// console.log(typeof changetype("123"));

//chorum
// function isPlural(a){
//     return (a.at(-1))== "s"
// }
// console.log(isPlural("flowers"));

//panjum 
// function reverseAndUppercase(word) {
//     return word.split('').reverse().join('').toUpperCase();
//   }
//   console.log(reverseAndUppercase("molas"));
  
//yakum (CLW2D4)
//  function multiplyNums(a){
//   let num =  a.split(",")
//     Number(a)
//     let n = 1
//     for (let i = 0 ; i < num.length; i ++){
//          n *= num[i]         
//     }
//     return n
//  }
//  console.log(multiplyNums("1,2,3"));

//DUYUM
// function hijo(a){
//     let n = a.split("")
//     let cnt = 1
//     for (let i = 0 ; i < n.length; i++){
//         if (n[i]=="-"){
//             cnt++
//         }
//     }
//     return cnt
    
// }
//  console.log(hijo("do-nish-goh"));
 
// seyum
// function include(a,b){
//     return a.includes(b)
// }
// console.log(include("asal","al"));

//chorum
// function include(a){
//     return a.includes(" ")
// }
// console.log(include("asal "));

//panjum
// function cocat(a){
//     let names="Hello ".concat(a)
//     return names
// }
// console.log(cocat("Salim"));

//shashum 
// function sting(a){
//     return a.length % 2 == 0 ? a[Math.floor(a.length/2)-1]+a[Math.floor(a.length/2)] :a[Math.floor(a.length/2)] 
// }
// console.log(sting("ssalom"));

//haftum 
// function doubleLetter(a){
//     let splitted = a.split("")
//     let n = ''
//     for (let i = 0 ; i < splitted.length ; i ++ )
//     {
//         if (splitted[i] == splitted[i+1]){
//             n=  'true' 
//             break
//         }   
//         else {n = 'false'}
//     }
//     return n
// }
// console.log(doubleLetter("ssalom"));

//hashtum
// function Nemo(a){
//     let spl = a.split(" ")    
//     for (let i = 1 ; i < spl.length ; i ++){
//         if (spl[i]=="Nemo") {
//             return 'I found Nemo at '+i+'!'

//         }
//     }
//     return 'I don`t found Nemo'
     
// }
// console.log(Nemo("I am finding Nemo !"));

//nuhum
// function  reverse(a){
//     let splitted = a.split(" ")
//     for (let i = 0 ; i < splitted.length ; i ++){
//         let spl = splitted[i].split("")
//         if (spl.length >= 5)[
//             spl.reverse()
//         ]
//         splitted[i] = spl.join("")
//     }
//     let text = splitted.join(" ")
//   return text
    
// }
// console.log(reverse("Salom se aleykum du"));

//dahum
// function dashed(a){
//     let spl = a.split("")
//     for (let i = 0 ; i < spl.length ; i ++){
//         if (spl[i]=="e" || spl[i]=="a"|| spl[i]=="i" || spl[i]=="o" || spl[i]=="u" || spl[i]=="E" || spl[i]=="A" || spl[i]=="I" || spl[i]=="O" || spl[i]=="U" ){
//             spl[i]="-"+spl[i]+"-"
//         }
//     }
//     let text = spl.join("")
//     return text
// }
// console.log(dashed("Carpe Diem"));

//yozdahum
// function  joinDigit(a){
//      let num = Number(a)
//      let res = ""
//      for (let i = 1 ; i <= num-1 ; i ++){
//         res += i + "-"
//      }
//      return res + a
// }
// console.log(joinDigit(10));

//duvozdahum
// function  checkPalindrome(a){
//     let revers =a.split('').reverse().join('')
//     return a == revers
// }
// console.log(checkPalindrome('nvan'));

//senzdahum
// function bot(b,a) {
//     let k = 0;
//     for (let i = 0; i < a.length - 1; i++){
//         if (a.at(i) == b) {
//             k++;
//         }
//     }
//     return k;
// }
// console.log(bot("m","Salom se aleykum du"));

// chordahum
// function bot(a) {
//     let k = "";
//     let s = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == a.at(i).toUpperCase()) {
//             k += a.at(i);
//         }
//         else {
//             s += a.at(i);
//         }
//     }
//     return k + s;
// }
// console.log(bot('nVAn'));

//Ponzdahum
// function  reverseAndNot(a){
//      let str =a.toString()
//     let revers = str.split("").reverse().join("")
//     return revers + a
// }
// console.log(reverseAndNot(123));
