var express = require('express'),
app = express(),
mysql = require('mysql'),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000;


//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST || 'localhost',
    user     : 'root',
    password : 'ucnlogin',
    database : 'ucn'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Hey the connection works')
});

app.route('/login').get((req, res) => {
    var params = [
        req.query.username,
        req.query.password
    ]
    connection.query('Select * from accounts where username=? and password=? limit 1', params,function (err, result) {
        if (err) {
            console.log('error: ', err)
            res.send(err)
        } else {
            let user = result[0] || {},
                response = {
                    login: !!(user.id),
                    user: user
                }

            res.json(response)
        }
    });
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port)

console.log('RESTful API server started on: ' + port)