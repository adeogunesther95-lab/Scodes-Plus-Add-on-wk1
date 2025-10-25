let currentDate = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:mm A");
let currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = `It is ${currentDate} in Honolulu, Hawaii.`;
// challenge 2
let futureDate = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format("dddd, MMMM D, YYYY h:mm A");
let futureDateElement = document.querySelector("#future-date");
futureDateElement.innerHTML = `10 years from now, it will be ${futureDate} in Paris, France.`;
//challenge 3
let localTimeZone = moment.tz.guess();
let localTimeZoneElement = document.querySelector("#local-time-zone");
localTimeZoneElement.innerHTML = `Your time zone is ${localTimeZone}.`;
