var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res) {
    unirest.post('http://httpbin.org/post')
        .headers({ 'Accept': 'application/json' })
        .send({ "title": 'Mimuz', "heading": "bar" })
        .end(function (response) {
            console.log(response.body);

            res.render('index', { title: response.body.form.title });
        });

});

module.exports = router;
