var mysql = require('mysql2');
//var Client = require('ssh2').Client;
var DBConfig = require('../config/db.config')
//var ssh = new Client();
const { Pool, Client } = require('pg')

const pool = new Pool({
	user: DBConfig.DBUser,
	host: DBConfig.HOST,
	database: DBConfig.DB,
	password: DBConfig.PASSWORD,
	port: DBConfig.PORT,
  })
const db = new Promise(function(resolve, reject){
	
	pool.query('SELECT NOW()', (err, res) => {
		if (err) {
			console.log(err)
		}
  pool.end()
})
const client = new Client({
  user: DBConfig.DBUser,
  host: DBConfig.HOST,
  database: DBConfig.DB,
  password: DBConfig.PASSWORD,
  port: DBConfig.PORT,
})
client.connect(function (err){

	if (err) {
		console.log(err)
		reject(client);
	} else {
		console.log("Successfully connected to the database.")
		resolve(client);
	}
})
    
});

module.exports = db;

