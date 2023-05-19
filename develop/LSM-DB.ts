import mariadb from 'mariadb'

const config : {[key:string]:number|string} = {
  host : "localhost",
  user : "root",
  password : "1q2w3e4r",
  database : "aitrading_db",
  port : 3307
}

const DBConnect = mariadb.createConnection(config)

