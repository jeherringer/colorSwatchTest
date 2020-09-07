// require what we need to start up a database
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
// set up express and our port
const app = express();
const port = process.env.PORT || 80
// use cors and express.json
app.use(cors());
app.use(express.json());
// setup our mongoose schema and model
const Schema = mongoose.Schema;
const colorSwatchSchema = new Schema({
    _id: Number,
    colorName: String,
    colorHue: String,
    colorGroup: String,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
const colorSwatch = mongoose.model('color', colorSwatchSchema);
// listening
app.listen(port, () => {
    console.log("server is listening")
});

app.use(express.static(path.join(__dirname, '../build')));

// an api path to recieve JSON data of the colors
app.get('/api', cors(), (req, res) => {
    // mongoose connection
const uri = process.env.MONGODB_LINK_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})

.catch(err => console.log(err))
    colorSwatch.find({  })
        .then((data) => {
            res.json(data);
            console.log("Data:", data)
            
        })
        .catch((error) => {
            console.log("Error:", error)
        })
})