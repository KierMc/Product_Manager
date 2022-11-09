const mongoose = require("mongoose");

const database = "productmanager22"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection Database: ${database}`))
.catch((err) => console.log(`Error establishing a connection to Database: ${err}`))