const data = require('../data/zoo_data');
// https://stackoverflow.com/questions/42184674/what-is-the-meaning-of-args-three-dots-in-a-function-definition

function getEmployeeObject(object) {
  const employeeObject = {
    id: object.id,
    fullName: (`${object.firstName} ${object.lastName}`),
  };
  const locationArray = [];
  const specieArray = [];
  object.responsibleFor.forEach((id) => {
    const specieObject = data.species.find((specie) => specie.id === id);
    specieArray.push(specieObject.name);
    locationArray.push(specieObject.location);
  });
  employeeObject.species = specieArray;
  employeeObject.locations = locationArray;

  return employeeObject;
}

function lookUpEmployee(nameOrId, prop) {
  let foundEmployee;
  if (prop === 'name') {
    foundEmployee = data.employees.find((e) => e.firstName === nameOrId || e.lastName === nameOrId);
  } else {
    foundEmployee = data.employees.find((e) => e.id === nameOrId);
  }
  if (!foundEmployee) {
    throw new Error('Informações inválidas');
  } else {
    return getEmployeeObject(foundEmployee);
  }
}

function getEmployeeList() {
  const employeeList = data.employees.reduce((acc, cur) => {
    const employeeObject = getEmployeeObject(cur);
    acc.push(employeeObject);
    return acc;
  }, []);
  return employeeList;
}

function getEmployeesCoverage(employee) {
  if (employee && employee.id) {
    return lookUpEmployee(employee.id, 'id');
  }
  if (employee && employee.name) {
    return lookUpEmployee(employee.name, 'name');
  }
  return getEmployeeList();
}

module.exports = getEmployeesCoverage;
