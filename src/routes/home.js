const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

//Variables
const layout = require('../templates/layout');

router.get('/', (req, res) => {
  try {
    const year = 2023;
    const month = 3;
    const events = [
      {
        id: 1,
        day: 24,
        title: 'Cook-a-thon',
      },
      {
        id: 2,
        day: 15,
        title: 'Bike race',
      },
    ];

    res.send(layout(year, month, events));
  } catch (error) {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
