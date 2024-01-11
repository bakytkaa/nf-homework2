"use strict";

//task 1

let restaurant = "Korean House";
let hostName = "Bakyt";
let salary = 1000;
const isOwner = true;
let customers = null;
let calcSalary = 1000 / 0;
const restOwner = `${hostName}'s restaurant is ${restaurant}`;
console.log(restOwner);
console.log(salary);
console.log(isOwner);
console.log(customers);
console.log(calcSalary);

const owners = {
  name: "Bakyt",
  ceo: true,
  age: 20,
  hobby: "none",
};
console.log(owners);
delete owners.hobby;
console.log(owners);
owners.hairColor = "black";
console.log(owners);

// task 2

const vehicle = {
  brandName: "BMW",
  model: "x5",
};
console.log(vehicle);
vehicle.model = "m1";
console.log(vehicle);
delete vehicle.model;
console.log(vehicle);

// task 3

let salaries = {
  Bekzat: 100,
  Ayala: 80,
  Suirik: 120,
};
console.log(salaries);

for (let key in salaries) {
  console.log(key, "=", salaries[key]);
}
