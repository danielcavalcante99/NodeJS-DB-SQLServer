//Arquivo: ConexaoDB.js

//Autor: Daniel Henrique Cavalcante da Silva

//Nesse arquivo iremos configurar o NodeJS para acessar o banco de dados

//Instale no terminal o mssql: npm init mssql --save
var sql = require('mssql');

//Importando o arquivo DadosDB.js
var dados = require('./DadosDB.js');

class ConexaoDB {

  static select(query) {
  sql.connect(dados.DBConfig ,function(err){
  if (err) console.log(err)

   var request = new sql.Request();

   request.query(query, function(err, select){
     
   var exibirQuery = select.recordset;


     //Aqui será mostrado o resultado do seu SELECT.
   console.log(exibirQuery);
   
    })
  })
 }
}

//Aqui iremos exportar a classe ConexaoDB para que outros arquivos possam acessa-la
module.exports.ConexaoDB = ConexaoDB;

