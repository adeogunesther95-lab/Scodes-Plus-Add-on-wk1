let currentDate = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:mm A");
let currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = `It is ${currentDate} in Honolulu, Hawaii.`;
