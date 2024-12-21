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
 

//Array
// let arr = [1,2,3,5,4]
// arr [3] = 4 // elementi indexa alish mekna
// arr [4] = 5
// arr [5] = 6  //indexi nav kati elementi nav dobavit mekna
// arr [6] = 7
// console.log(arr[4]/2);

//methods of array

//pop ()
// let arr = [1,2,3,4,5]
// console.log(arr.pop()); //ay okhir akta-yakta udalit mekne (okhirongi elementa da khdsh megira)
// console.log(arr);  // res arr badi pop()

//push()
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.push(8)); // ay okhiron element dobavit mekna darozii navi massiva mebrora (shumorai elementora) 
// console.log(arr);  // badi push()

// array forEach
// let arr = [1,2,3,,4,5,6]
// let num = arr.forEach((element,index,massiva)=>{
//     console.log('elements:'+element);    
// }) //return nadora baroi har yak elementa ivaz mekna massivi nav nameta

//array map
// let arr = [1,2,3,4,5]
// let res = arr.map((e,i,m)=>{
//       return e * 2
// })
// console.log(res); //return dora massivi nav mebrora ba massivi glavni kor nadora

//array filter
// let arr = [2,4,5,68,78,641,321,321]
// console.log(arr.filter((e,i,ar)=>{
//     return e % 2 == 0
// })); // agar element true bosha mebrorash..

// array find 
// let arr = [2,4,5,68,78,641,321,321]
// console.log(arr.find((e,i,ar)=>{
//     return e % 2 == 0
// })); // rangi filter faqat yakum elementi true ra mebrora tamom

// //array toSort
// let phone = ["iphone","samsung","nokia","alkatel"]
// let sorted = phone.toSorted()



