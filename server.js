// server.js

// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

// mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io
mongoose.connect('mongodb://node:node@waffle.modulusmongo.net:27017/Inives2u');

app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// define model =================
var Competitor = mongoose.model('Competitor', {
    index: Number,
    number: Number,
    name: String,
    surname: String,
    lastname: String,
    birthday: Date,
    category: String
});

var Category = mongoose.model('Category', {
    name: String,
    competitors: Number,
    stage: String,
    n: Number
});

var Judge = mongoose.model('Judge', {
    number: String,
    name: String,
    surname: String,
    lastname: String,
    password: String
});

// // routes ======================================================================
//
// app.post('/api/judges', function(req, res) {
//     Judge.findOne(function(err, users) {
//         if (err)
//             res.send(err)
//         res.json(judges);
//     });
// });


//api/judges

// get all Judges
app.get('/api/judges', function (req, res) {
    Judge.find(function (err, judges) {
        if (err)
            res.send(err)
        res.json(judges);
    });
});

// create Judge and send back all Judges
app.post('/api/judges', function (req, res) {
    Judge.create({
        name: req.body.name,
        number: req.body.number,
        surname: req.body.surname,
        lastname: req.body.lastname,
        password: req.body.password,
        done: false
    }, function (err, judge) {
        if (err)
            res.send(err);

        Judge.find(function (err, judges) {
            if (err)
                res.send(err)
            res.json(judges);
        });
    });
});

// update judge
app.put('/api/judges/:judge_id', function (req, res) {
    Judge.update({ _id: req.params.judge_id }, req.body, function (err, judges) {
        Judge.find(function (err, judges) {
            res.json(judges);
        });
    });
});

// delete judge by ID
app.delete('/api/judges/:judge_id', function (req, res) {
    Judge.remove({
        _id: req.params.judge_id
    }, function (err, judge) {
        if (err)
            res.send(err);
        Judge.find(function (err, judges) {
            if (err)
                res.send(err)
            res.json(judges);
        });
    });
});

//api/categories

// get all categories
app.get('/api/categories', function (req, res) {
    Category.find(function (err, categories) {
        if (err)
            res.send(err)
        res.json(categories);
    });
});

// create category and send back all caregories
app.post('/api/categories', function (req, res) {
    Category.create({
        name: req.body.name,
        competitors: req.body.competitors,
        stage: req.body.stage,
        done: false
    }, function (err, category) {
        if (err)
            res.send(err);
        Category.find(function (err, categories) {
            if (err)
                res.send(err)
            res.json(categories);
        });
    });
});

// update category by ID
app.put('/api/categories/:category_id', function (req, res) {
    Category.update({ _id: req.params.category_id }, req.body, function (err, categories) {
        Category.find(function (err, categories) {
            res.json(categories);
            //console.log('Ya vse sdelal')
        });
    });
});

// delete category by ID
app.delete('/api/categories/:category_id', function (req, res) {
    Category.remove({
        _id: req.params.category_id
    }, function (err, category) {
        if (err)
            res.send(err);
        Category.find(function (err, categories) {
            if (err)
                res.send(err)
            res.json(categories);
        });
    });
});

// /api/competitors

// get all competitors
app.get('/api/competitors', function (req, res) {
    Competitor.find(function (err, competitors) {
        if (err)
            res.send(err)
        res.json(competitors);
    });
});

// create competitor and send back all competitors after creation
app.post('/api/competitors', function (req, res) {
    Competitor.create({
        number: req.body.number,
        name: req.body.name,
        surname: req.body.surname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        category: req.body.category,
        index: req.body.index,
        done: false
    }, function (err, competitor) {
        if (err)
            res.send(err);

        // get and return all the competitors after you create another
        Competitor.find(function (err, competitors) {
            if (err)
                res.send(err)
            res.json(competitors);
        });
    });
});

// // // todo competitors result table
// app.put('/api/competitors/:competitor_id', function(req, res) {
//     Competitor.update({_id: req.params.competitor_id},req.body.index, function(err, res) {
//         Competitor.find(function(err, competitors) {
//             if(err)
//                 res.send(err)
//             res.json(competitors);
//             console.log('Ya vse sdelal')
//         });
//     });
// });
// app.put('/api/competitors/', function(req, res) {
//     Competitor.update({order : req.params.order}, req.body , function(err, res) {
//         Competitor.find(function(err, competitor) {
//             if(err)
//                 res.send(err)
//             res.json(competitor);
//             console.log('Server otpravil obnovlenni poryadok');
//         });
//     });
// });

// delete a competitor
app.delete('/api/competitors/:competitor_id', function (req, res) {
    Competitor.remove({
        _id: req.params.competitor_id
    }, function (err, competitor) {
        if (err)
            res.send(err);

        // get and return all the competitors after you create another
        Competitor.find(function (err, competitors) {
            if (err)
                res.send(err)
            res.json(competitors);
        });
    });
});

// update competitor
app.put('/api/competitors/:competitor_id', function (req, res) {
    Competitor.update({ _id: req.params.competitor_id }, req.body, function (err, competitors) {
        Competitor.find(function (err, competitors) {
            res.json(competitors);
        });
    });
});

// application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendfile('app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen server port
app.listen(8080);
console.log("App listening on port 8080");
