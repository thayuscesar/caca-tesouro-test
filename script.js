const statusText = document.getElementById("status");
const overlay = document.getElementById("overlay");
const resgatarBtn = document.getElementById("resgatarBtn");

const markerLivro = document.getElementById("markerLivro");
const markerGarrafa = document.getElementById("markerGarrafa");

let encontradoLivro = false;
let encontradoGarrafa = false;

function mostrarTesouro(origem) {
  if ((origem === "livro" && !encontradoLivro) || (origem === "garrafa" && !encontradoGarrafa)) {
    overlay.style.display = "flex";
    statusText.innerText = "🎯 Tesouro avistado!";
    overlay.dataset.origem = origem;
  }
}

function esconderTesouro() {
  overlay.style.display = "none";
  statusText.innerText = "✅ Tesouro resgatado com sucesso!";
}

markerLivro.addEventListener("markerFound", () => mostrarTesouro("livro"));
markerGarrafa.addEventListener("markerFound", () => mostrarTesouro("garrafa"));

resgatarBtn.addEventListener("click", () => {
  const origem = overlay.dataset.origem;
  if (origem === "livro") encontradoLivro = true;
  if (origem === "garrafa") encontradoGarrafa = true;
  esconderTesouro();
});
