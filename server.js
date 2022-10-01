const express = require('express');
const request = require('request');
const crypto = require('crypto');
const PORT = process.env.PORT || 3030;



const app = express();
app.use(express.urlencoded());  
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

// view engine setup
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/so', (req, res) => {
    res.render('so');
});

app.get('/lienquan', (req, res) => {
    res.render('lienquan');
});

app.get('/freefire', (req, res) => {
    res.render('freefire');
});

app.get('/fifaonline4', (req, res) => {
    res.render('fifaonline4');
});

app.get('/lol', (req, res) => {
    res.render('lol');
});

app.get('/freefire', (req, res) => {
    res.render('freefire');
});

app.post('/top-up-card', (req, res) => {
    console.log(req.data);
    var options = {
    'method': 'POST',
    'url': 'http://{{domain}}/chargingws/v2',
    'headers': {
        'Content-Type': 'application/json'
    },
    formData: {
        'telco': req.data.type,
        'code': '312821445892982',
        'serial': '10004783347874',
        'amount': '50000',
        'request_id': '323233',
        'partner_id': '3681148751',
        'sign': '19db4f1670100764069dba47429a9d94',
        'command': 'charging'
    }
    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    });
});

app.post('/check-card', (req, res) => {
    // console.log(JSON.stringify(req.body));
    let data = req.body;
    // console.log(data.type);
    // console.log("--------------");

    var sign = '18e398cc4b5953b2b14d1c931c061e44' + data.code + data.serial; 
    var signMd5 = crypto.createHash('md5').update(sign).digest('hex');

    var options = {
        'method': 'POST',
        'url': 'https://thesieure.com/chargingws/v2',
        'headers': {
          'Content-Type': 'application/json'
        },
        formData: {
          'telco': data.type,
          'code': data.code,
          'serial': data.serial,
          'amount': data.amount,
          'request_id': '323233',
          'partner_id': '0771824661',
          'sign': signMd5,
          'command': 'check'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        // console.log(response.body);
        res.send(response.body);
      });

});

