const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const specieManaged = findEmployee.responsibleFor[0];
  const findSpecie = data.species.find((specie) => specie.id === specieManaged);
  const sortedSpecie = findSpecie.residents.sort((a, b) => b.age - a.age);
  const oldestSpecie = sortedSpecie[0];
  return [oldestSpecie.name, oldestSpecie.sex, oldestSpecie.age];
}

module.exports = getOldestFromFirstSpecies;
