const { lock, unlock } = require('./Vault');
const password = 'thisisastrongpassword123';

const obj = {
  name: 'John Doe',
  age: 32,
  city: 'Chicago',
  country: 'US',
};

const person = lock(obj, password);
console.log(person);
console.log(obj);
person.favColor = 'Red';
person.favFruit = 'Apple';
console.log(person);
console.log(person.name);

const unlocked = unlock(person, password);
console.log(unlocked);
