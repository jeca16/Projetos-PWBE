/*****************************************************************************************************
 * Objetivo: começar a criação de uma API para responder dados de estados e cidades                  *
 * Data: 10/11/23                                                                                    *
 * Autor: Jessica Pereira dos Santos                                                                 *
 * Versão:1.0                                                                                        *
 ****************************************************************************************************/

/**
 *  instalações para a criação da API
 * express - npm install express -- save
 * express é uma dependencia do node para auxiliar na criação da API
 * 
 * Cors -  npm install cors -- save
 * cors é uma dependencia para manipular recursos de acesso, permissões, etc da API
 * 
 * Body-parser - npm install body-parser --save
 * body-parser é uma dependencia para auxiliar na chegada de dados da API 
 * 
 */


// import das bibliotecas do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// cria o objeto app tendo como referencia a classe express
const app = express();


// request - receber dados
// response - devolve dados
// next - 

// funçã para configurar as permissões do cors
// response.header('Access-Control-Allow-Origin', '*') -  configura quem poderá fazer as aquisições na API- *libera para todos, ip restringe o acesso
// response.header('Access-Control-Allow-Methods', 'GET') - configura os metodos que poderão ser utilizados na API- GET, POST, PUT, DELETE
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors());

    next();
})

// EndPoints: listar a sigla de todos os estados 

app.get('/estados/sigla', cors(), async function(request, response, next){

    let controleListaEstados = require('./modulo/trabalho_manipulando_array')
    let estados = controleListaEstados.getCidades('RJ')
    response.json(estados)
    response.status(200)
})

// executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})

