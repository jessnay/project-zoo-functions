const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const zooAnimals = {};
  if (!animal) {
    species.forEach((especie) => {
      zooAnimals[especie.name] = especie.residents.length;
    });
    return zooAnimals;
  }
  const findAnimals = species.find((specie) => specie.name === animal.specie);
  if (!animal.sex) {
    return findAnimals.residents.length;
  } return findAnimals.residents.reduce((acc, currentAnimal) => {
    if (animal.sex === currentAnimal.sex) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

countAnimals({ specie: 'bears', sex: 'female' });

module.exports = countAnimals;
