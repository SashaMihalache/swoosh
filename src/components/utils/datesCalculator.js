
function getWeekNumber(date) {
  const firstOfJan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay() + 1) / 7);
}

function getCalculatedAssignedZone(characterId, zones) {
  const randomNumber = Math.floor(Math.random() * (zones.length));
  const week = this.getWeekNumber(new Date());
  console.log(week % characterId);
  return zones[randomNumber];
}