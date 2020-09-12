const myPeople = [
  { age: 21, eyeColor: 'blue', firstName: 'Ivan', lastName: 'Neikov' },
  { age: 22, eyeColor: 'green', firstName: 'Kaloyan', lastName: 'Yanakov' },
  { age: 55, eyeColor: 'yellow', firstName: 'Boris', lastName: 'Shekspirov' },
  { age: 66, eyeColor: 'black', firstName: 'Stefan', lastName: 'Dankov' },
  { age: 27, eyeColor: 'black', firstName: 'Anatoli', lastName: 'Vikingov' },
  { age: 15, eyeColor: 'yellow', firstName: 'Hari', lastName: 'Petkov' },
  { age: 18, eyeColor: 'blue', firstName: 'Lusi', lastName: 'Sergeev' },
  { age: 42, eyeColor: 'blue', firstName: 'Petkan', lastName: 'Shaulic' },
];

// 1. console.log every person's full name but do not use loops as you know them
const names = myPeople.forEach((person) =>
  console.log(`${person.firstName} ${person.lastName}`)
);

// 2. Filter all the people who are younger than 30 years
const youngerThan30 = myPeople.filter(({ age }) => age < 30);
console.log(youngerThan30);

// 3. Add createdAt property to each person in the array - use new Date() as value

const withCreatedAdd = myPeople.map((person) => ({
  ...person,
  createdAd: new Date(),
}));
console.log(withCreatedAdd);

// 4. Find the total age of all the people older than 30 years (exclusive)

const totalAge = myPeople
  .filter(({ age }) => age > 30)
  .reduce((sum, amount) => sum + amount.age, 0);
console.log(totalAge);

// 5. Find out if all the people are older than 18
const isOlderThan18 = myPeople.every((person) => person.age > 18);
console.log(isOlderThan18);

// 6. Find if any person's first name is Terry
const isTerry = myPeople.some((person) => person.firstName === 'Terry');
console.log(isTerry);



