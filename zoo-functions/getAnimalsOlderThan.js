const data = require('../data/zoo_data');
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => specie.name === animal);
  return findSpecie.residents.every((e) => e.age > age);
}

module.exports = getAnimalsOlderThan;
