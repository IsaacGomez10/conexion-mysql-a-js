var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "controlempleados"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

con.query('select * from empleados', (err, rows) => {
    if (err) throw err
    console.log('Los datos son: ')
    console.log(rows)
})

con.end()