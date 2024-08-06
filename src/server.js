//configuracoes de bibliotecas
//biblioteca de tratamento de erros
require("express-async-errors")
const express = require('express');
const app = express();
//utilizado para definir o formato que vai ser enviado os dados
app.use(express.json());
const PORT = 3334;

const migrationsRun = require("./database/sqlite/migrations")

//chamada de arquivos
const AppError = require('./utils/AppError');
const database = require("./database/sqlite") 


const routes = require("./routes")
app.use(routes)
migrationsRun()
database()

app.use((error,request,response, next) => {
    if (error instanceof AppError) {
           return response.status(error.statusCode).json({
           status: "error",
           message: error.message  
      })
    } 

 
    return response.status(500).json({
           status: "error",
           message: "Internal Server Error"
     })
 }
 )



app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));