let express = require('express')
let app = express()
const dbConfig = require('./config/db.config')

app.use(express.urlencoded({ extended: false}))

const db = require('./models/index')

db.mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("yah maded it")
        initial()
    })
    .catch((err) =>{
        console.error("ERROR:", err)
        process.exit()
    })

const Flight = db.flight
const Airport = db.airport
const Terminal = db.terminal
function initial() {
    Flight.create({
        from: "france",
        to: "NYC",
        airline: "AA"
    })
}





app.get('/', (req, res) =>{
    db.flight.find({}, (err, flight) =>{
        if(err){
            res.send(err)
        } else {
            console.log(flight)
            res.send("It works!")
        }
    })
})

app.listen(8090)