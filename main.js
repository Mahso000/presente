window.addEventListener("load", () => {

  const arrow = document.getElementById("next-button");

  // Esconde imediatamente
  if (arrow) {
    arrow.style.display = "none";
  }

  // Animações das flores
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  // Mostra a seta depois de 6 segundos
  setTimeout(() => {
    if (arrow) {
      arrow.style.display = "block";

      arrow.onclick = () => {
        alert("Funcionou! 💗");
      };
    }
  }, 6000);

});
