const { listEvents } = require('../model/events.js');
// const { getSession } = require('../model/sessions.js');
const { layout } = require('../templates.js');

function get(req, res) {
  /**
   * commented out because we're not checking
   * if the current user is the same as the original poster
   */
  // const sid = req.signedCookies.sid;
  // const session = getSession(sid);
  // const current_user = session && session.user_id;
  const events = listEvents(req.params.user_id);
  const title = 'Playdates';
  const content = /*html*/ `
      <div class="Cover">
        <h1>${title}</h1>
        <form method="POST" class="Stack" style="--gap: 0.5rem">
          <textarea name="content" aria-label="your event" rows="4" cols="30" style="resize: vertical"></textarea>
          <input type="date">
          <button class="Button">Submit</button>
        </form>
        <ul class="Center Stack">
          ${events
            .map(
              (entry) => `
              <li>
                <h2>${entry.event_date}</h2>
                <p>${entry.content}</p>
              </li>
              `
            )
            .join('')}
        </ul>
      </div>
    `;
  const body = layout({ title, content });
  res.send(body);
}

module.exports = { get };
