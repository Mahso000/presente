window.addEventListener("load", () => {

  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  setTimeout(() => {
    const arrow = document.getElementById("next-button");

    if (arrow) {
      arrow.style.display = "block";
    }
  }, 6000);

});
