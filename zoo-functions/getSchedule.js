const data = require('../data/zoo_data');

function getDaysOfTheWeek() {
  return Object.keys(data.hours);
}

function isWeekDayOrAnimalName(parameter) {
  const specieParameter = data.species.find((specie) => specie.name === parameter);
  const daysOftheWek = getDaysOfTheWeek();
  const daysOftheWekParameter = daysOftheWek.find((day) => day === parameter);
  if (!specieParameter && !daysOftheWekParameter) return false;
  return true;
}

function getMondaySchedule() {
  return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
}

function getDayProperty(day, isSingleDay) {
  const dayObject = {};
  if (day === 'Monday') {
    return getMondaySchedule();
  }

  const exhibitionArray = [];
  const exhibitionSpecies = data.species.filter((specie) => specie.availability.includes(day));
  exhibitionSpecies.forEach((specie) => {
    exhibitionArray.push(specie.name);
  });
  dayObject.officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  dayObject.exhibition = exhibitionArray;
  if (isSingleDay) return { [day]: dayObject };
  return dayObject;
}

function getAllDaysSchedule() {
  const createObject = getDaysOfTheWeek().reduce((acc, cur) => {
    acc[cur] = getDayProperty(cur);
    return acc;
  }, {});
  return createObject;
}
const getSpecieAvaibility = (specieName) => data.species.find((specie) =>
  specie.name === specieName).availability;

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return { Monday: getMondaySchedule() };
  if (!scheduleTarget || !isWeekDayOrAnimalName(scheduleTarget)) return getAllDaysSchedule();
  if (getDaysOfTheWeek().includes(scheduleTarget)) return getDayProperty(scheduleTarget, true);
  return getSpecieAvaibility(scheduleTarget);
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
