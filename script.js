let totalItems = 2; // Total de objetos
let foundItems = 0;
let userName = prompt("Qual é o seu nome?");
let startTime = new Date();
let foundMarkers = new Set();

document.getElementById("infoButton").onclick = function () {
  document.getElementById("userInfo").style.display = "block";
  document.getElementById("userName").innerText = userName;
  document.getElementById("gameTime").innerText =
    Math.floor((new Date() - startTime) / 1000) + " segundos";
  document.getElementById("foundItems").innerText = foundItems;
};

document.getElementById("takePhoto").onclick = function () {
  alert("📸 Foto tirada! (Função de captura pode ser implementada com canvas)");
};

["marker1", "marker2"].forEach((id) => {
  document.getElementById(id).addEventListener("markerFound", function () {
    if (!foundMarkers.has(id)) {
      foundMarkers.add(id);
      foundItems++;
      document.getElementById(
        "status"
      ).innerText = `Objetos encontrados: ${foundItems} de ${totalItems}`;

      if (foundItems === totalItems) {
        alert("🎉 Parabéns! Você encontrou todos os tesouros!");
      }
    }
  });
});
