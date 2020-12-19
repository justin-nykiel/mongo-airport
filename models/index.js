const mongoose = require('mongoose')


mongoose.Promise = global.Promise



const db = {}

db.airport = require('./airport.model')
db.flight = require('./flight.model')
db.passenger = require('./passenger.model')
db.terminal = require('./terminal.model')

db.mongoose = mongoose



module.exports = db