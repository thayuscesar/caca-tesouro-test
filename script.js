const statusText = document.getElementById("status");
const resgatarBtn = document.getElementById("resgatarBtn");

const markerLivro = document.getElementById("markerLivro");
const markerGarrafa = document.getElementById("markerGarrafa");

const tesouroLivro = document.getElementById("tesouroLivro");
const tesouroGarrafa = document.getElementById("tesouroGarrafa");

let ativo = null;

function mostrarBotao(marcador) {
  if (!ativo) {
    ativo = marcador;
    statusText.innerText = "🎯 Tesouro avistado!";
    resgatarBtn.style.display = "block";
  }
}

function esconderBotao(marcador) {
  if (ativo === marcador) {
    ativo = null;
    statusText.innerText = "📡 Aguardando marcador do tesouro...";
    resgatarBtn.style.display = "none";
  }
}

markerLivro.addEventListener("markerFound", () => mostrarBotao("livro"));
markerLivro.addEventListener("markerLost", () => esconderBotao("livro"));
markerGarrafa.addEventListener("markerFound", () => mostrarBotao("garrafa"));
markerGarrafa.addEventListener("markerLost", () => esconderBotao("garrafa"));

resgatarBtn.addEventListener("click", () => {
  if (ativo === "livro") {
    tesouroLivro.setAttribute("visible", "false");
  } else if (ativo === "garrafa") {
    tesouroGarrafa.setAttribute("visible", "false");
  }
  resgatarBtn.style.display = "none";
  statusText.innerText = "✅ Tesouro resgatado com sucesso!";
  ativo = null;
});
