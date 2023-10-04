function inputForm(events) {
  return /*html*/ `
  <div class="Cover">
    <h1>Add an event</h1>
    <form method="POST" class="Stack" style="--gap: 0.5rem">
      <textarea name="content" aria-label="your event" rows="4" cols="30" style="resize: vertical"></textarea>
      <input name="event_date" type="date">
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
}

module.exports = { inputForm };
