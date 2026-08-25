window.addEventListener("load", () => {

  const arrow = document.getElementById("next-button");

  if (arrow) {
    arrow.onclick = () => {
      window.location.href = "pagina3.html";
    };
  }

});
