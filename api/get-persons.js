const persons = require('../persons')

module.exports = (req, res) => {
  res.json(persons)
}
