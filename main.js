onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  setTimeout(() => {
    document.querySelector(".next-button").classList.add("show");
  }, 6000);
};
