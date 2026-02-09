// const data=[5];
// const[x,y=10]=data;
// console.log(x);
// console.log(y);
// console.log(data);

// const data=[5];
// const[y,x=10]=data;
// console.log(x);
// console.log(y);
// console.log(data);


let person={
    name: "vgg",
    age: 20,
    p_no : 7895081254
};

let { name="v", age=19, p_no =123} = person;

let {
    name: username,
    age: userage,
    p_no: phone_number
} = person;

console.log(username,userage);

let {country= "USA"}=person;
console.log("person");
console.log(country);

