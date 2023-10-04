const getDaysInMonth = require('../utils/getDaysInMonth');
const getMonthName = require('../utils/getMonthName');

const layout = (year, month, events) => {
  const daysOfMonth = Array.from(
    { length: getDaysInMonth(year, month) },
    (_, index) => index + 1
  );

  // debatable thresholds
  if (month < 11) {
    const nextMonth = `/month/${month + 1}`;
  } else {
    const nextMonth = `/month/${month - 11}`;
  }

  if (month > 0) {
    const lastMonth = `/month/${month - 1}`;
  } else {
    const lastMonth = `/month/${month + 11}`;
  }

  return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../normalize.css">
        <link rel="stylesheet" href="../styles.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:500|Vollkorn:400i" rel="stylesheet">
        <title>Play Dates</title>    
      </head>
      <body>
          <header class="header">
            <h1>Play Dates</h1>
          </header>
          <main>
            <div class="nav-bar">
              <h2>${getMonthName(month)}</h2>
              <div class="flex">
                <form method ='GET' action =${lastMonth}>
                  <button type= 'submit' class="button nav-bar__month-button">&blacktriangleleft;</button>
                </form>
                <form method ='GET' action =${nextMonth}>
                  <button type = 'submit' class="button nav-bar__month-button">&blacktriangleright;</button>
                </form>
              </div>
              <form class="flex">
                <button class="button nav-bar__button">+ date</button>
              </form>
              <form class="flex">
                <button class="button nav-bar__button">log out</button>
              </form>
            </div>

            <form action="/form" method="GET" class="flex">
              <button type="submit" class="button nav-bar__button">+ date</button>
            </form>
            <form class="flex">
              <button class="button nav-bar__button">log out</button>
            </form>
          </div>
          <div class="calendar">
            ${daysOfMonth
              .map(
                (day) => /*html*/ `<div class="day-card">
                  <div class="flex-start-column">
                    <h3 class="calendar-day">${day}</h3>
                  </div>
                `
                )
                .join('')}
            </div>
          </main>
        </div>
    </body>
  </html>`;
};

module.exports = layout;
