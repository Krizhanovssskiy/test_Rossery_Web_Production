const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const createErrors = require('http-errors');

const app = express();
const port = 3001;
const IndexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/', IndexRouter)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//render html file
app.engine('html', require('ejs').renderFile)
// app.get('/', (req, res) => {
//     res.render('index.html', { message: 'Hello Express!' })
// })

//render ejs file
// app.get('/', (req, res) => {
//     res.render('index')
// })

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(new createErrors.NotFound());
});
//error handler
app.use((err, req, res, next) => {
    //render the error page
    res.status(err.status || 500);
    res.render('error', { err })
})

app.listen(port, () => {
    console.log(`port webapp ${port}`)
})