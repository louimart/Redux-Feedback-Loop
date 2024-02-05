const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
  const newFeedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
                    VALUES ($1, $2, $3, $4)`
  pool
    .query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then ((result) => {
      console.log('POST successfully added new feedback')
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`ERROR making database query POST: ${sqlText}`, error);
      res.sendStatus(500);
    })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
