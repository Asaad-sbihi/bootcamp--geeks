const { format, addDays } = require('date-fns');

function displayFutureDate() {
  const currentDate = new Date();
  const futureDate = addDays(currentDate, 5);
  const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');

  console.log('📅 La date après 5 jours :', formattedDate);
}

module.exports = displayFutureDate;