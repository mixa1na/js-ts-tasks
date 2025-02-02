module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const currentDate = new Date(targetDate); 
  
  const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);

  const timeDifference = nextYear.getTime() - currentDate.getTime();

  const daysRemaining = timeDifference / (1000 * 3600 * 24);

  return Math.ceil(daysRemaining);
};
