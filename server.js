// requiring packages needed
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
// needed to connect to MongoDB
const mongoose = require ('mongoose');
const javascriptRoutes = express.Router();
const PORT =4000;

// importing model
let Javascript = require('./models/jsmodel')

// adding middlewear
app.use(cors());
app.use(bodyParser.json);

// connects backend to specified database on MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/javascript', {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("Mongo DB database connection established");
});

javascriptRoutes.route('/').get(function(req, res){
    Javascript.find(function(err, javascripts){
        if (err){
            console.log (err);
        }else{
            res
        }
    })
})


app.use('/javascript', javascriptRoutes);
app.listen(PORT, function() {
    console.log('server is running on PORT: ' + PORT);
});