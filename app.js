const texto = document.getElementById("recebido");

function cripto() {
  let cripto = texto.value.
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  document.getElementById("resultado").innerHTML = cripto;
}

function descripto() {
  let desCripto = texto.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.getElementById("resultado").innerHTML = desCripto;
}
