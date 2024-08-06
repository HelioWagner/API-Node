//definir caminho banco para utilizar qualquer maquina
const path = require('path');

module.exports = {

  development: {
    //banco de dados
    client: 'sqlite3',
    debug: true,
    //onde fica banco de dados
    connection: {
      //definindo o caminho banco para utilizar                              
      filename: path.resolve(__dirname,"src","database","database.db")
    },
    pool: {
      afterCreate:(conn,cb) => conn.run("PRAGMA foreign_keys= ON",cb)      

   },
    migrations: {
      directory: path.resolve(__dirname,"src","database","Knex","migrations")
    },
    useNullAsDefault: true
  }  
};
