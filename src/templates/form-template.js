/* eslint-disable prettier/prettier */
const getDaysInMonth = require('../utils/getDaysInMonth');
const getMonthName = require('../utils/getMonthName');

function inputForm(year, month, events) {
  const daysOfMonth = Array.from(
    { length: getDaysInMonth(year, month) },
    (_, index) => index + 1
  );

  return /*html*/ `
  <!doctype html>
  <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
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
            <form>
              <button class="button nav-bar__month-button">&blacktriangleleft;</button>
            </form>
            <form>
              <button class="button nav-bar__month-button">&blacktriangleright;</button>
            </form>
          </div>
          <form action="/form" method="GET" class="flex">
            <button type="submit" class="button nav-bar__button">+ date</button>
          </form>
          <form class="flex">
            <button class="button nav-bar__button">log out</button>
          </form>
        </div>
        <div class="center">
          <h2 class="center margin-top-md">Add an event</h2>
          <form method="POST" class="margin-top-sm">
            <input type="text" name="content" aria-label="your event">
            <input name="event_date" type="date" min="2023-01-01" max="2023-12-31">
            <button class="button">Submit</button>
          </form>
        </div>
        <div class="calendar">
          ${daysOfMonth
            .map(
              (day) => /*html*/ `<div class="day-card">
                <div class="flex-start-column">
                  <h3 class="calendar-day">${day}</h3>
                </div>
                <div class="flex-wrap">
                  ${events
                    .map((event) => {
                      if ((event.day === day)) {
                        return /*html*/ `
                          <form method="GET" action="/events/${event.id}">
                            <button type="submit" class="button">${event.title}</button>
                          </form>
                        `;
                      }
                      return '';
                    })
                    .join('')}
                </div>
              </div>
            `
            )
            .join('')}
        </div>
        </main>
      </div>
      </body>
      </html>`;
}

module.exports = { inputForm };
