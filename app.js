const express = require('express');

const app = express();

const port = 3001;

app.use(express.static('./public'))

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('server running into 3001');
});

module.exports = express;