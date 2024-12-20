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

//double
// function double(a){
//     let b =""
//     if (typeof(a)=="number"){
//        return "Not a string"
//     }
//     for (let i = 0 ; i < a.length ; i ++){
//         b +=a[i].concat(a[i])
//     }
//     return b
//  }

//Boom
// function Boom(a){
//     let n = a.includes("7")
//    if (n){
//     return "Boom"
//    }
//    return "No"

//  }
//  console.log(Boom("1,2,3,5,6,7"));

//number
// function number (a){
//     let spl = a.split("")
//     let n = ""
//     for (let i = 0 ; i <spl.length ; i ++ ){
//         if (isNaN(spl[i])){
//             n += spl[i]
//         }
//     }
//     return n
//  }
//  console.log(number("sal1om"));

// function reverse(a){
//     let rev = a.split("").reverse().join("")
//     let n = ""
//     for (let i = 0 ; i < rev.length ; i ++){
//        if (rev[i].toUpperCase()== rev[i]){
//         n += rev[i].toLowerCase()

//        }
//        else if (rev[i].toLowerCase()==rev[i]){
//         n +=  rev[i].toUpperCase()
//        }
//     }
//     return n
//  }

// function takror (a){
//     let text = ""
//     for (let i = 0 ; i < a.length ; i++){
//        if (a[i ] != a[i+1]){
//           text +=a[i]
//        }
//     }
//     return text
//  }
//  console.log(takror("aaaa"));

//asal

// function closer (a=1){
//     return (b) => {
//          return a++
//     }
//     return b
// }
// let asal = closer()
// console.log(asal(0));
// console.log(asal(0));

//asal

// function closer (a=0){
//     return (b) => {
//         for ( let i = b ; i > 0 ; i = Math.floor(i/10)){
//             a += i % 10;
//         }
//     return a;
//     }
//  }
//  let asal = closer();

// function rekur (a){
//     if (a == 0){
//      return 0
//     }
//      return a = pow(a,3) + rekur(a-1)
//  }
//  console.log(rekur(3));

// function recur(a){
//     let b = 1
//     for ( let i = 1 ; i <= a ; i++){
//         b *= i
//     }
//     if (a == 1 ){
//         return a
//     }
//     return b * recur(a - 1)
// }
// console.log(recur(4));

//yakum
// let min = 999999
// function mini(a){
//     if (a == 0) {
//        return min
//     }
//     if (a % 10 < min){
//         min = a % 10
//     }

//     return mini(Math.floor(a/10))
// }
// console.log(mini(259478));

//duyum
// let max = -999999
// function mini(a){
//     if (a == 0) {
//        return max
//     }
//     if (a % 10 > max){
//         max = a % 10
//     }

//     return mini(Math.floor(a/10))
// }
// console.log(mini(259478));

//seyum
// function  minmax (min,max,num=''){
//     if (min > max ){
//         return "Undefined"
//     }
//     if (min == max){
//         return max
//       }

//     return num += min + ',' + minmax(min+1, max)
// }
// console.log(minmax(5,12));

//Panjum
// function recSumOper(a,b,c, res=0){
//     res = (a+b+c)+(a-b-c)+(a*b*c)+(a/b/c)+(a%b%c)
//     return res
// }
// console.log(recSumOper(1,2,3));

//Shashum
// function recurMedium(...a){
//      let rev = a.reverse()
//      return rev
// }
// console.log(recurMedium(1,2,3));

//Array
//yakum
// function sumOfArray(...a){
//     let sum = 0
//    for (let i = 0 ; i < a.length ; i ++ ){
//      sum += a[i]
//    }
//   return sum
// }
// console.log(sumOfArray(1,2,3,4,5));

//duyum
// function maxNum (...a){
//     let max= -99999
//     for (let i = 0 ; i < a.length ; i ++){
//         if (a[i]>max){
//             max= a[i]
//         }
//     }
//     return max
// }
// console.log(maxNum(2,4,5,9,7,12,32,45));

//seyum
// function evenCount(...a){
//     let cnt = 0
//     for ( let i = 0 ; i < a.length ; i ++){
//     if (a[i] % 2 == 0){
//         cnt++
//        }
//     }
//     return cnt
// }
// console.log(evenCount(1,2,3,5,6,7));

//chorum
// function isPresent(a,b){
//     return a.includes(b)
// }
// console.log(isPresent([2,3,4,5,6],8));

//panjum
// function arithmetic(a){
//     let n = 0
//     let sum = 0
//     for (let i = 0 ; i < a.length ; i ++ ) {
//         n ++
//         sum += a[i]
//     }
//     return Math.floor(sum / n)
// }
// console.log(arithmetic([2,4,6,8]));

//zadacha

//yakum
// function mergeArrays(...arrays){
//    return arrays.reduce((acc,curr) => acc.concat(curr),[])
// }
// console.log(mergeArrays([15, 4], [2, 3],[5,7]));

//duyum
// function findIndex(a,b){
//     return a.indexOf(a.find((e,i,ar)=>{
//         return e == b
//     }))
// }
// console.log(findIndex([1,2,3,4],2));

//seyum
// function removeDuplicates (a){
//     let nav = a.forEeach((el,ind,arr)=>{
//        if (el == el){
//         a.pop()
//        }
//     })
//     return nav
// }
// console.log([1, 2, 2, 3, 4, 4]);

let arr = [1, 2, 2, 3, 4, 4];
console.log(
  arr.forEach((el, ind, arr) => {
    if (el == el) {
        
    }
  })
);
