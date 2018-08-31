/* jshint esversion: 6 */
(() => {
    'use strict';
})();

const
    express = require('express'),
    app = express(),
    handlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

const
    config = require('./config.json'),
    questionController = require('./controller/questionController'),
    askRouter = require('./router/askRouter'),
    questionRouter = require('./router/questionRouter'),
    questionAPIRouter = require('./router/questionAPIRouter');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/ask', askRouter);
app.use('/question', questionRouter);
app.use('/api/question', questionAPIRouter);

app.get('/', (req, res) => {
    res.render('homepage', {
        isAsk: '',
        isQuestion: ''
    });
});

app.use(express.static('public'));

mongoose.connect(
    config.connectionString, {
        useMongoClient: true
    }, (err) => {
        if (err) throw err;
        console.log('Mongodb connect success.');
    }
);

app.listen(config.port, (err) => {
    if (err) throw err;
    console.log(`${config.port} is listening.`);
});