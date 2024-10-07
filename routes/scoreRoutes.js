const router = require('express').Router();
const { getScores, submitEntry } = require('../controller/scoreController');

router.get('/getScores', getScores);
router.post('/submitEntry', submitEntry);

module.exports = router;
