const data = require('../data/zoo_data');

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

function countEntrants(entrants) {
  const array = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age >= 50) {
      array.senior += 1;
      return;
    }
    if (element.age >= 18) {
      array.adult += 1;
      return;
    }
    array.child += 1;
  });
  return array;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const ages = countEntrants(entrants);
  const { adult, child, senior } = data.prices;
  return ages.adult * adult + ages.child * child + ages.senior * senior;
}

module.exports = { calculateEntry, countEntrants };
