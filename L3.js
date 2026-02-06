// let student={
//     name: "vg",
//     roll: {uni: 269,id: 270},
//     college : "kiet"
// }
// console.log(student.roll.uni);
let obj1={
    name: "vg"
}
let obj2=obj1;
obj2.name="vgggg";
console.log(obj1.name);//not cloning instead refrencing to same point
console.log(obj2.name);
