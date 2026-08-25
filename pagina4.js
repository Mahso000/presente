window.addEventListener("load", () => {

  const prev = document.getElementById("prev-button");

  if (prev) {
    prev.onclick = () => {
      window.location.href = "pagina3.html";
    };
  }

});
