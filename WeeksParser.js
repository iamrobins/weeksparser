class WeeksFinder {
  daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  weekDaysM = (week, month, year) => {
    const daysInAMonth = this.daysInMonth(month, year);
    const allWeeksDays = [];
    for (let i = 1; i <= daysInAMonth; i++) {
      if (new Date(year, month, i).toDateString().split(" ")[0] === week) {
        allWeeksDays.push(new Date(year, month, i).toDateString().split(" ")[2]);
      }
    }
    return allWeeksDays;
  };

  weekDaysY = (week, year) => {
    const totalWeeks = [];
    for (let i = 0; i <= 11; i++) {
      totalWeeks[i] = [];
      const totalDaysOfMonth = this.daysInMonth(i, year);
      for (let day = 1; day <= totalDaysOfMonth; day++) {
        if (new Date(year, i, day).toDateString().split(" ")[0] === week) {
          totalWeeks[i].push(new Date(year, i, day).toDateString().split(" ")[2]);
        }
      }
    }
    return totalWeeks;
  };
}

module.exports = WeeksFinder;
