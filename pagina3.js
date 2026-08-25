window.addEventListener("load", () => {

  const prev = document.getElementById("prev-button");
  const next = document.getElementById("next-button");

  if (prev) {
    prev.onclick = () => {
      window.location.href = "pagina2.html";
    };
  }

  if (next) {
    next.onclick = () => {
      window.location.href = "pagina4.html";
    };
  }

});
