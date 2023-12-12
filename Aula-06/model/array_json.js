/***********************************************************************
 * Objetivo: Aprender a trabalhar com estruturas de dados Array e JSON *
 * Data: 29/09/2023                                                    *
 * Autor: Jessica Pereira dos Santos                                   *
 * Versão: 1.0                                                         *
 ***********************************************************************/

// [ ] -> Representa a estrutura ARRAY
// { } -> Representa a estrutura JSON


const introducaoArray = function () {

    //Criando um ARRAY de forma manual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

    //Exibe os dados do ARRAY
    console.log(listaDeNomes);

    //Exibe os dados do ARRAY em formato de tabela
    console.table(listaDeNomes);

    //Retorna a quantidade de elementos de um array
    console.log(listaDeNomes.length);

    //Adiciona elementos novos no FINAL da lista
    listaDeNomes.push('Roberto');

    //Adiciona elementos novos no INÍCIO da lista, "empurrando" os outros elementos para baixo (menos usado por mudar o índice dos elementos)
    listaDeNomes.unshift('Ricardo');

    //Remove o ÚLTIMO elemento do array
    listaDeNomes.pop();

    //Remove o PRIMEIRO elemento do array
    listaDeNomes.shift();

    //Remove um elemento baseado no índice, podendo definir a qtde de itens a serem excluídos, a partir do índice indicado
    //Ex: .slpice(2,3) -> 2 é referente ao índice | -> 3 é referente a qtde de itens
    listaDeNomes.splice(2, 1);

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true);

    console.log(listaDeNomes);

    console.table(listaDeNomes);

    //Retorna o tipo de dados de um elemento
    console.log(typeof (listaDeNomes[9]));

}

const percorrendoArray = function () {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];

    //WHILE
    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log(`Nome do produto: ${listaDeProdutos[cont]}`);
    //     cont++;
    // }


    //FOR
    // for(let cont=0; cont<listaDeProdutos.length; cont++){
    //     console.log(`Nome do produto: ${listaDeProdutos[cont]}`);
    // }


    //FOREACH
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(`${indice} - Nome do produto: ${produto}`);
    // })

    //Retorna o índice do elemento que foi encontrado
    //Caso não exista o item buscado, retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna um booleano do elemento que foi buscado: true se o item exsitir, false se não existir
    console.log(listaDeProdutos.includes('Mouse'));
}

const filtrarProduto = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
    let nome = String(nomeProduto);

    let status = false;

    // return listaDeProdutos.includes(nome)

    listaDeProdutos.forEach(function (produto) {
        if (produto.toLowerCase() == nome.toLowerCase()) {
            status = true;
        }
    })
    return status
}

// criando um JSON manual
const manioulandoArrayJson = function () {
    /*
    existem diversos tipos de dados para integração de tecnologias
    ex: XML <atributi> valor </atributo>
    ex 2: JSON - { atributo: valor } 
    */
    let contato = { nome: 'josé da silva', telefone: '40028922', email: 'jose@gmail.com' };
    let contato2 = { nome: 'maria da silva', telefone: '95648234', email: 'maria@gmail.com' };
    let contato3 = { nome: 'ana da silva', telefone: '97964580', email: 'ana@gmail.com' };

    let arrayContatos = [contato, contato2, contato3];


    // criando novos atributos no JSON de forma dinâmica
    contato.celular = "93947068"
    contato.Data_Nascimento = '2000-05-10'
    contato.idade = 23;

    // console.log(typeof(contato));

    // para extrair o conteudi de cada atributo do JSON 
    console.log('nome: ' + contato.nome);
    console.log('telefone: ' + contato.telefone);
    console.log('email: ' + contato.email);
    console.log('celular: ' + contato.celular);
    console.log('Data de nascimento: ' + contato.Data_Nascimento);
    console.log('idade: ' + contato.idade);

    // console.log(arrayContatos);

    // console.log(arrayContatos[0])
    // console.log(arrayContatos[1])
    // console.log(arrayContatos[0].nome)

    // percorrendo array e json

    arrayContatos.forEach(function (dados) {

        console.log('\n*********************************')
        console.log('nome: ' + dados.nome);
        console.log('telefone: ' + dados.telefone);
        console.log('email: ' + dados.email);

        // tratamento para validar a impressão dos valores 
        if(dados.celular != undefined)
            console.log('celular: ' + dados.celular);
        if(dados.Data_Nascimento != undefined)
            console.log('Data de nascimento: ' + dados.Data_Nascimento);
        if(dados.idade != undefined)
            console.log('idade: ' + dados.idade);
    });

}

const produtosArrayJson = function(){
    let listaCores =    [
                            { id: 1, nome: 'Branco'},
                            { id: 2, nome: 'Preto'},
                            { id: 3, nome: 'Cinza'},
                            { id: 4, nome: 'Rosa'},
                            { id: 5, nome: 'vermelho'},
                            { id: 6, nome: 'Azul'}

                        ];

    let listaMarca =    [
                            { id: 1, nome: 'Dell'},
                            { id: 2, nome: 'Lenovo'},
                            { id: 3, nome: 'Apple'},
                            { id: 4, nome: 'Logitech'},
                            { id: 5, nome: 'Positivo'},
                            { id: 6, nome: 'Multilaser'},
                            { id: 7, nome: 'Razer'}
                        ];

    let listaCategorias =   [
                                { id: 1, nome: 'Hardware', descricao: 'Hardware'},
                                { id: 2, nome: 'Periférico', descricao: 'Periférico'},
                                { id: 3, nome: 'Gamer', descricao: 'Gamer'},
                                { id: 4, nome: 'Acessórios', descricao: 'Acessórios'}
                            ];

    // cria um objeto do tipo JSON para o array produtos
    let JSONProdutos = {};

    // cria um objeto do tipo array para guardar os produtos 
    let arrayProdutos = [];

    // objeto para criar os produtos
    let Produto1 = {    id: 1, 
                        nome: 'Mouse', 
                        descricao: 'Mouse optico com fio', 
                        categoria: listaCategorias[1],
                        marca: listaMarca[0],
                        cor:    [
                                    listaCores[0],
                                    listaCores[1],
                                    listaCores[2]
                                ]
                        
                    }

    let Produto2 = {    id: 2, 
                        nome: 'Teclado', 
                        descricao: 'Teclado com fio padrão ABNT', 
                        categoria: listaCategorias[1],
                        marca: listaMarca[3],
                        cor: listaCores,
                        
                    }

    let Produto3 = {    id: 3, 
                        nome: 'Monitor', 
                        descricao: 'Monitor com alta resolução e qualidade', 
                        categoria: listaCategorias[1],
                        marca: listaMarca[6],
                        cor: [
                                listaCores[0],
                                listaCores[1]
                             ]
                        
                    }

    let Produto4 = {    id: 4, 
                        nome: 'Placa de video', 
                        descricao: 'uma da melhores placas de video para rodar os seus jogos em alta resolução', 
                        categoria: listaCategorias[0],
                        marca: listaMarca[6],
                        cor:    [
                                    listaCores[1]
                                ]
                        
                    }

    let Produto5 = {    id: 5, 
                        nome: 'Cooler', 
                        descricao: 'Evita que o seu computador frite', 
                        categoria: listaCategorias[0],
                        marca: listaMarca[0],
                        cor:    [
                                    listaCores[1]
                                ]
                        
                    }

    //  adicionando os produtos no array produtos
    arrayProdutos.push(Produto1);
    arrayProdutos.push(Produto2);
    arrayProdutos.push(Produto3);
    arrayProdutos.push(Produto4);
    arrayProdutos.push(Produto5);



    // adicionar o atributo produto e coloca o array de produtos
    JSONProdutos.produtos = arrayProdutos;

    // adiciona o atributo count e coloca a quantidade de produtos
     JSONProdutos.count = arrayProdutos.length;

    //  adiciona o atributo status e coloca o codigo 200 que é aquisição bem sucedida
     JSONProdutos.status = 200;

    console.log(JSONProdutos)

}
let arrayProdutos;

const exibeProdutos = function(){
    
    arrayProdutos.forEach(function(JSONProdutos){
        console.log('************ Listagem de Produtos ************')
        console.log( 'Nome: ' + JSONProdutos.nome);
        console.log( 'Descrição: '+ JSONProdutos.descricao);
        console.log( 'Categoria: ' + JSONProdutos.categoria);
        console.log( 'Marca: ' + JSONProdutos.marca);
        console.log( 'Quantidade de produtos: ' + JSONProdutos.count) ;
        
        if(JSONProdutos.cor > 1)
            console.log( 'Cor: ' + JSONProdutos.listaCores)
        if( JSONProdutos.cor < 1)
            console.log( 'Cor ' + JSONProdutos.cor)
    }); 
}

// exibeProdutos();

// produtosArrayJson();

// manioulandoArrayJson();

// console.log(filtrarProduto('ana'))

percorrendoArray();

// introducaoArray();