var express = require('express');
var app = express();
var sql = require('mssql');

app.get('/', function (req, res) {

    var config = {
        user: '',
        password: '',
        server: 'localhost\\MSSQLSERVER', 
        database: 'NEHRDespensedMedicine'
    };

    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select COLUMN_NAME from NEHRDespensedMedicine.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'PatientProfile'", function (err, result) {
            if (err) console.log(err);
            res.send(result);
        });
    });

});


var server = app.listen(5050, function () {
    console.log('Server is running!');
});