const data = require('../data/zoo_data');
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function isManager(id) {
  const findManager = data.employees.find((employee) => employee.managers.includes(id));
  if (findManager) return true;
  return false;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const findEmployees = data.employees.filter((employee) => employee.managers.includes(managerId));
  return findEmployees.map((e) => `${e.firstName} ${e.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
