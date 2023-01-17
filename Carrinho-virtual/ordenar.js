//json  
    // const categoria = require("./carrinho.json")

    const categoria = [
        {
            "nome": "Televisao 4k",
            "valor": 1999.99, 
            "categoria": "Eletronico"
        },
        {
            "nome": "Sapato social", 
            "valor": 175.07, 
            "categoria": "Moda"
        },
        {
            "nome": "Mintendo Sweet", 
            "valor": 2499.99, 
            "categoria": "Eletronico"
        },
        {
            "nome": "Camiseta Vike", 
            "valor": 79.99, 
            "categoria": "Moda"
        },
        {
            "nome": "Caneta Tosca - Branca", 
            "valor": 25.53, 
            "categoria": "Papelaria"
        }
    ]

//valor da compra toda
    var calculaValor = categoria.reduce((valor, total) => {
        return Math.round(valor + total.valor);
    }, 0);
    console.log(`O valor total dessa compra é  ${calculaValor}`);

    

//produto com maior valor
  const maxValor = categoria.reduce(function(prev, current) { 
    return prev > current.valor ? prev  : current.valor; 
    });

    console.log(`O item mais caro da lista  ${maxValor}`)

//ordem alfabetica
    function ordenarCategoria(lista, propriedade){
        const resultado = lista.sort((a,b) => {
            if (a[propriedade] < b[propriedade]){
                return -1;
            }
            if (a[propriedade] > b[propriedade]){
                return 1;
            }
            return 0;
        })
        return resultado;  
    }

    function ordenarNome(lista, propriedade){
        const resultado = lista.sort((a,b) => {
            if (a[propriedade] < b[propriedade]){
                return -1;
            }
            if (a[propriedade] > b[propriedade]){
                return 1;
            }
            return 0;
        })
        ordenarCategoria(categoria, "categoria");
        return resultado;
    }

    const ordenadoNome =ordenarNome(categoria, "nome"); 

//consoles log
    console.log(ordenadoNome);

//botões

const botao3 = document.getElementById("lista")

botao3.addEventListener("click", mostraLista)

function mostraLista() {
ordenadoNome.forEach((item) => {
lista.innerHTML += `<div>
<h2>${item.nome}</h2>
</div>`
} )}
 
