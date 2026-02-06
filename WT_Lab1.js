// let x=20;
// let y=x;
// x=15;
// console.log(x);       //15
// console.log(y);m      //20

// let arr=[1,2,3,4];
// let arr2=arr;
// arr2[0]=5;
// console.log(arr);    //5,2,3,4
// console.log(arr2);   //5,2,3,4

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// let p1=new person("vaasu",19);
// let p2=new person("vi",20);
// // let p2=p1;
// // p2.name="vi";
// // p2.age=20;
// // let x="5"
// // let y=5
// console.log(p1);
// console.log(p2);
// console.log(p1===p2);

// let add =(a=10,b=20)=>{
//     let add2=(c=30,d=40)=>{
//         return c+d;
//     }
//     return add2();
// }
// console.log(add());


// let person = {
//     name: "Alice",
//     age: 25,
//     isStudent: true,

//     testing () {
//         console.log("hi, this is " + this.name);
//         console.log(this);
//             let inner = function () {
//                 console.log("hello this is " + this.name);
//                 console.log("inside inner function");
//             };
//         inner.call(this);
//     }
// };

// person.testing();
// class Address{
//     constructor(hno,street,pincode){
//         this.hno=hno;
//         this.street=street;
//         this.pincode=pincode;
//     }
// }

//  class Person {
//     constructor(name, age,address) {
//         this.name = name;  
//         this.age = age;     
//         this.address =address
//     }
// }
// let add1=new Address(95,"sona enclave",201204)
// let p1=new Person("vaasu",19,add1);
// console.log(p1);



let arr=[1,2,3];
let [a,b]=arr;
console.log(a,"",b);


