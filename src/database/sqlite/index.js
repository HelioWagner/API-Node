//versao do drive
const sqlite3 = require('sqlite3');

//banco de dados
const sqlite = require("sqlite")

const path = require("path")

async function sqliteConnection(){
    const database = await sqlite.open({
        filename: path.resolve(__dirname,"..","database.db"),
        driver: sqlite3.Database 
    })
    return database
}

module.exports = sqliteConnection
