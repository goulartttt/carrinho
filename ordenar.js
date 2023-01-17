//json

fetch("./carrinho.json")
  .then((resposta) => resposta.json())
  .then((dados) => {
    executaTudo(dados.categoria);
  });
// import categoria from "./carrinho.json";

//valor da compra toda
function executaTudo(categoria) {
  var calculaValor = categoria.reduce((valor, total) => {
    return Math.round(valor + total.valor);
  }, 0);
  console.log(`O valor total dessa compra é  ${calculaValor}`);

  //produto com maior valor
  const maxValor = categoria.reduce(function (prev, current) {
    return prev > current.valor ? prev : current.valor;
  });

  console.log(`O item mais caro da lista  ${maxValor}`);

  //ordem alfabetica
  function ordenarCategoria(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
    return resultado;
  }

  function ordenarNome(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
    ordenarCategoria(categoria, "categoria");
    return resultado;
  }

  const ordenadoNome = ordenarNome(categoria, "nome");

  //consoles log
  console.log(ordenadoNome);

  //botões

  const botao3 = document.getElementById("btn-lista");

  botao3.addEventListener("click", mostraLista);

  let listaAberta = false;

  function mostraLista() {
    if (listaAberta) {
      lista.innerHTML = "";
      listaAberta = false;
    } else {
      listaAberta = true;
      ordenadoNome.forEach((item) => {
        lista.innerHTML += `<div class="item">
<h2>${item.nome}</h2>
<p>R$${item.valor}</p>
<p>${item.categoria}</p>
</div>`;
      });
    }
  }
}
