const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const port = process.env.PORT || 80;

const app = express();
app.use(cors());
app.options('*', cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

const template = fs.readFileSync(path.resolve('./public/index.html'), 'utf-8');
app.get('/', function (req, res) {
    res.send(template);
});

app.listen(port, () => {
    console.log("server started on port " + port);
});
