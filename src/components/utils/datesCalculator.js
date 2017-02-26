export const getWeekNumber = (date) => {
  const firstOfJan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay() + 1) / 7);
};

export const getCalculatedAssignedZone =(characterId, currentWeek, zones) => {
  const zonesModulus = zones.length;
  const assignedZoneIndex = (characterId + (currentWeek - 1)) % zonesModulus;
  return zones[assignedZoneIndex];
};

export const getWeekNumberFromMonday = (date) => {
  var d = new Date(date);
  d.setHours(0,0,0,0);
  d.setDate(d.getDate()+4-(d.getDay()||7));
  return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};