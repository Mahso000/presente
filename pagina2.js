window.addEventListener("load", () => {

  const prev = document.getElementById("prev-button");
  const next = document.getElementById("next-button");

  if (prev) {
    prev.onclick = () => {
      window.location.href = "index.html";
    };
  }

  if (next) {
    next.onclick = () => {
      window.location.href = "pagina3.html";
    };
  }

});
