// const numbers = [1, 2, 3, 4];
// numbers.method(number)=> { return number }
// numbers.method(number => number);

// const dobleNumbers =[];
// numbers.forEach(number => dobleNumbers.push(number ** 2));
// console.log(dobleNumbers);

// const dobleNumbers = numbers.map((number) => { return number ** 2; });
// const dobleNumbers = numbers.map((number) => number ** 2);
// console.log(dobleNumbers);

// const getDobleNumbers = (array) => {
  // return array.map((number) => {
    // return number ** 2;
  // });
// }

// const getDobleNumbers = (array) => array.map((number) => number ** 2;);
// console.log(dobleNumbers);
// console.log([2, 4, 8, 16]);

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
//  ];

// // const dataValue = data.flatMap(item => item.values);
// // console.log(dataValue);

// const dataValue = data => data.flatMap(item => item.values);
// console.log(dataValue(data));


const people = [ 
  { name: 'John', age: 27 }, 
  { name: 'Jane', age: 31 }, 
  { name: 'Bob', age: 19 }, 
];

const hasUnder20 = people.some(person => person.age < 20);
console.log(hasUnder20);

const getSomePeople = array => 
