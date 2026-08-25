window.addEventListener("load", () => {

  const arrow = document.getElementById("next-button");

  if (arrow) {
    arrow.style.display = "none";
  }

  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  setTimeout(() => {
    if (arrow) {
      arrow.style.display = "block";

      arrow.onclick = () => {
        window.location.href = "pagina2.html";
      };
    }
  }, 6000);

});
