const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

module.exports = getDaysInMonth;
