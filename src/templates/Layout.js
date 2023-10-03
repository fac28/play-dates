const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

function layout(year, month, events) {
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
      <link rel="stylesheet" href="public/styles.css">
      <title>Play Dates</title>    
      </head>
      <body>
          <main>
          <h2>${month}</h2>
          <div class="calendar">
            ${daysOfMonth
              .map(
                (day) => /*html*/ `<div class="day">
                  <h3>${day}</h3>
                  ${events
                    .map((event) => {
                      if (event.day === day) {
                        return /*html*/ `
                          <form method="GET" action="/events/${event.id}">
                            <button type="submit">${event.title}</button>
                          </form>
                        `;
                      }
                      return '';
                    })
                    .join('')}
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

module.exports = layout;
