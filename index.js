const express = require('express');
const path = require('path');
const hbs = require('express-hbs');


const herosRouter = require('./routes/heros.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`Method => ${req.method}. URL => ${req.url}. ==> ${delta}ms.`);
});

// express build in middleware
//express.json() is a built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

//static assets
// app.use(express.static('./public'));
app.use('/site', express.static(path.join(__dirname, 'public')));

//set view engine
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('messages', {
        name: "Legendary Hero",
        city: "Let\s go !!!!"
    })
})

app.use('/heros', herosRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, _ => {
    console.log(`Server is running at PORT ${PORT}`);
})

/**
 API that follows the rest pattern we call restfull api
 Rest? Not sleeping kind of rest
 REST => REpresentational State Transfer
 */