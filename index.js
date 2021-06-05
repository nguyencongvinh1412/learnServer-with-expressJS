const express = require('express')
const app = express()
const userRoute = require('./route/user.route');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

// cấu hình để dùng static file
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        chude: 'Welcome lesson 9 static file'
    });
});

app.use('/users', userRoute);

app.listen(port, (req, res) => {
    console.log('listening on port : ' + port);
});