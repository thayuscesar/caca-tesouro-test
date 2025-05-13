
function iniciarJogo() {
  document.getElementById('start-screen').classList.add('oculto');
  document.getElementById('game-screen').classList.remove('oculto');
}

function mostrarImagem(src) {
  document.getElementById("imagem-grande").src = src;
  document.getElementById("imagem-tesouro").style.display = "flex";
}

function fecharImagem() {
  document.getElementById("imagem-tesouro").style.display = "none";
}
