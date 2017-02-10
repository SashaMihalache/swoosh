export const getWeekNumber = (date) => {
  const firstOfJan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay() + 1) / 7);
};

export const getCalculatedAssignedZone =(characterId, currentWeek, zones) => {
  const zonesModulus = zones.length;
  const assignedZoneIndex = (characterId + (currentWeek - 1)) % zonesModulus;
  return zones[assignedZoneIndex];
};