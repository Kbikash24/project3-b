const mysql2 =require('mysql2')

const pool=mysql2.createPool({
    host:'localhost',
    user:'root',
    database:'node-complet',
    password:'Bikash@123'
})

module.exports=pool.promise();