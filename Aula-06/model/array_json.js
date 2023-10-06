/***********************************************************************
 * Objetivo: Aprender a trabalhar com estruturas de dados Array e JSON *
 * Data: 29/09/2023                                                    *
 * Autor: Jessica Pereira dos Santos                                   *
 * Versão: 1.0                                                         *
 ***********************************************************************/

// [ ] -> Representa a estrutura ARRAY
// { } -> Representa a estrutura JSON


const introducaoArray = function(){

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
    listaDeNomes.splice(2,1);

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true);

    console.log(listaDeNomes);

    console.table(listaDeNomes);

    //Retorna o tipo de dados de um elemento
    console.log(typeof(listaDeNomes[9]));

}

const percorrendoArray = function(){
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

const filtrarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
    let nome = String(nomeProduto);

    let status = false;

    // return listaDeProdutos.includes(nome)

    listaDeProdutos.forEach(function(produto){
        if(produto.toLowerCase() == nome.toLowerCase()){
            status = true;
        }
    })
    return status
}

console.log(filtrarProduto('ana'))

// percorrendoArray();

// introducaoArray();