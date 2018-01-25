var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "10.3.136.69",
    user: 'root',
    password: '12345678',
    database: 'wine',
    multipleStatements: true
})

module.exports = {
    select: function(_sql, _callback){
        console.log(_sql)
        db.query(_sql, function(error, results, fields){
            // console.log(results);
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    insert: function(){
        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    delete: function(){
        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    update: function(){
        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    }
}