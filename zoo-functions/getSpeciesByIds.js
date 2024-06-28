const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    const array = [];
    const specieById = data.species.find((specie) => specie.id === ids[0]);
    array.push(specieById);
    return array;
  }
  const specieArray = [];
  ids.forEach((id) => {
    const specieById = data.species.find((specie) => specie.id === id);
    if (specieById) {
      specieArray.push(specieById);
    }
  });
  return specieArray;
};

module.exports = getSpeciesByIds;
