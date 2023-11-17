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
    let estados = controleListaEstados.getListaDeEstados()
    response.json(estados)
    response.status(200)
})

// EndPoint: retorna os dados do estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
    let siglaEstado = request.params.uf  //recebe uma variavel escaminhada por parametro na URL de requisição
    let controleDadosEstados = require('./modulo/trabalho_manipulando_array.js') //import do arquivo de funções
    let dadosEstado = controleDadosEstados.getDadosEstado(siglaEstado)

    if(dadosEstado){
        response.json(dadosEstado)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro: "não foi possivel encontrar a sigla"})
    }
    
})

// EndPoint: retorna os dados da capital filtrando pela sigla 
app.get('/capital/estado', cors(), async function(request, response, next){
    // recebe parametos via query, são variaveis encaminhadas na url da requisição (?uf=SP)
    let siglaEstado = request.query.uf
    let controleDadosCapital = require('./modulo/trabalho_manipulando_array.js')
    let dadosCapital = controleDadosCapital.getCapitalEstado(siglaEstado)

    if(dadosCapital){
         response.json(dadosCapital)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro: " não foi possvel encontrar um item"})
    }
    
})

// EndPoint: retorna os estados filtrando pela região
app.get('/regiao/cidade', cors(), async function(request, response, next){
    let regiao = request.query.regiao
    let controleRegiao = require('./modulo/trabalho_manipulando_array.js')
    let cidadeRegiao = controleRegiao.getEstadosRegiao(regiao)

    if(cidadeRegiao){
        response.json(cidadeRegiao)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro: 'não foi possivel encontrar essa região'})
    }
})

// EndPoint: lista e verifica todas as antigas capitais do pais
app.get('/capital/pais', cors(), async function(request, response, next){
    let controleCapitalPais = require('./modulo/trabalho_manipulando_array.js')
    let capital = controleCapitalPais.getCapitalPais()
    response.json(capital)
    response.status(200)
})

// EndPoint: lista as cidades filtrando pela sigla do estado
app.get('/cidades/estado', cors(), async function(request, require, next){
    let estado = request.query.uf
    let controleEstado = require('./modulo/trabalho_manipulando_array.js')
    let cidadeEstado = controleEstado.getCidades(estado)

    if(cidadeEstado){
        response.json(cidadeEstado)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro: 'não foi possivel encontrar esse estado'})
    }
})

// executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})

