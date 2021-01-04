const WeeksParser = new (require("./WeeksParser.js"))();

const week = "Fri",
  month = 0,
  year = 2021;

console.log(`Total Days In January"`, WeeksParser.daysInMonth(month, year));

console.log("All Fridays In Januray 2021", WeeksParser.weekDaysM(week, month, year));

console.log("All Fridays In 2021", WeeksParser.weekDaysY(week, year));

/*
Total Days In January" 31
All Fridays In Januray 2021 [ '01', '08', '15', '22', '29' ]
All Fridays In 2021 [
  [ '01', '08', '15', '22', '29' ],
  [ '05', '12', '19', '26' ],
  [ '05', '12', '19', '26' ],
  [ '02', '09', '16', '23', '30' ],
  [ '07', '14', '21', '28' ],
  [ '04', '11', '18', '25' ],
  [ '02', '09', '16', '23', '30' ],
  [ '06', '13', '20', '27' ],
  [ '03', '10', '17', '24' ],
  [ '01', '08', '15', '22', '29' ],
  [ '05', '12', '19', '26' ],
  [ '03', '10', '17', '24', '31' ]
]
*/
