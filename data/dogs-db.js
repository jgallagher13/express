const dogsWalked = [
    {dog: 'Socks', done: true},
    {dog: 'Obi', done: false},
    {dog: 'Cleo', done: false}
  ]

  module.exports = {
    getAll: function() {
        return dogsWalked
    }
  }