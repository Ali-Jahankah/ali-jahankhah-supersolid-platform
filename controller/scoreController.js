const NodeCache = require('node-cache'); // Using node-cache to save the scores in memory
const scoreCache = new NodeCache();
const { isAlphabetic, isPalindrome } = require('../helper-function/helper');
const getScores = (req, res) => {
  const allScores = scoreCache.get('scores') || [];
  const top5Scores = allScores.sort((a, b) => b.points - a.points).slice(0, 5); // Returning top 5 scores

  res.status(200).json(top5Scores);
};

const submitEntry = (req, res) => {
  const { word, name } = req.body;
  if (!word || !name) {
    return res
      .status(401)
      .send({ message: 'You must provide a valid name and a valid word' });
  }
  let scores = scoreCache.get('scores') || [];
  const lowercaseWord = word.replace(/\s+/g, '').toLowerCase(); //Convert the whole entry to lower case letters
  let newEntryScore = {
    name: name.charAt(0).toUpperCase() + name.slice(1), // Make the first letter capital
    word
  };
  if (isAlphabetic(lowercaseWord) && isPalindrome(lowercaseWord)) {
    newEntryScore.points = lowercaseWord.length;
  } else {
    newEntryScore.points = 0;
  }
  scores.push(newEntryScore);
  scoreCache.set('scores', scores); // Updating state with the new entries
  res.status(201).json({ points: newEntryScore.points });
};
module.exports = { getScores, submitEntry };
