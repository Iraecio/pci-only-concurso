// Encontra todas as divs com a classe "ca"
var divsCa = document.querySelectorAll(".ca");

// Loop através de todas as divs com a classe "ca"
for (var i = 0; i < divsCa.length; i++) {
  var divCa = divsCa[i];

  // Encontra todos os links dentro da div
  var links = divCa.getElementsByTagName("a");

  // Loop através de todos os links e encontra o primeiro que contém a palavra "concurso" em seu título
  for (var j = 0; j < links.length; j++) {
    var link = links[j];
    var titulo = link.getAttribute("title");

    if (titulo && titulo.toLowerCase().indexOf("concurso") != -1) {
      // Adiciona a palavra "concurso" entre parênteses no final do texto do primeiro link encontrado
      if (j === 0) {
        var textoOriginal = link.innerHTML;
        var novoTexto = textoOriginal + " (concurso)";
        link.innerHTML = novoTexto;
      }
      break;
    }
  }
}
