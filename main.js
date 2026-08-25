window.addEventListener("load", () => {

  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  setTimeout(() => {
    const arrow = document.getElementById("next-button");

    if (arrow) {
      arrow.style.display = "block";

      arrow.addEventListener("click", () => {
        alert("Funcionou! 💗");
      });
    }
  }, 6000);

});
