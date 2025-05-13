
function mostrarFormulario() {
  document.getElementById('start-screen').classList.add('oculto');
  document.getElementById('form-screen').classList.remove('oculto');
}

function iniciarJogo() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;

  if (!nome || !idade) return false;

  document.getElementById('form-screen').classList.add('oculto');
  document.getElementById('game-screen').classList.remove('oculto');
  return false;
}

function mostrarImagem(src) {
  document.getElementById('imagem-grande').src = src;
  document.getElementById('imagem-tesouro').classList.remove('oculto');
}

function fecharImagem() {
  document.getElementById('imagem-tesouro').classList.add('oculto');
  // Atualizar contador de itens (lógica posterior)
}
