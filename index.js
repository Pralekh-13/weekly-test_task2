let person = {
  name: "XYZ",
  age: 25,
  address: "DELHI"
};

console.log(person.name);
console.log(person.age);
console.log(person.address);

person.age = 30;

person.email = "xyz@example.com";

delete person.address;

console.log(person.name);
console.log(person.age);
console.log(person.email);
