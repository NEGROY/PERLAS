const mysql = require('mysql');

// CONEXCION 
const mysqlConnection = mysql.createConnection({
    host:     '3.132.48.124',
    user:     'occi_negroy',
    password: 'Pokemon24685',
    database: 'occi_negroy'
})

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }
})


module.exports = mysqlConnection;
/* mysql.createConnection({
    host:     '204.93.224.158',
    user:     'ztjsyyzu_negroy',
    password: 'Wiutn8xrmFm;',
    database: 'ztjsyyzu_pearls'
})*/
